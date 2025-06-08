import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log("Attempting to subscribe:", email)
    console.log("Using Publication ID:", process.env.BEEHIIV_PUBLICATION_ID)
    console.log("API Key exists:", !!process.env.BEEHIIV_API_KEY)

    if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
      console.error("Missing environment variables")
      return NextResponse.json(
        {
          error: "Server configuration error - missing credentials",
        },
        { status: 500 },
      )
    }

    const beehiivUrl = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`

    console.log("Making request to:", beehiivUrl)

    const response = await fetch(beehiivUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        send_welcome_email: true,
      }),
    })

    console.log("Beehiiv response status:", response.status)

    const responseText = await response.text()
    console.log("Beehiiv response:", responseText)

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      // Parse the error response
      let errorData
      try {
        errorData = JSON.parse(responseText)
      } catch (e) {
        errorData = { message: responseText }
      }

      console.error("Beehiiv error:", errorData)

      // Return specific error messages
      if (response.status === 401) {
        return NextResponse.json(
          {
            error: "Authentication failed - check API key",
          },
          { status: 400 },
        )
      } else if (response.status === 404) {
        return NextResponse.json(
          {
            error: "Publication not found - check publication ID",
          },
          { status: 400 },
        )
      } else if (response.status === 400 && errorData.errors) {
        return NextResponse.json(
          {
            error: errorData.errors[0] || "Invalid request",
          },
          { status: 400 },
        )
      } else {
        return NextResponse.json(
          {
            error: `Beehiiv error: ${errorData.message || "Unknown error"}`,
          },
          { status: 400 },
        )
      }
    }
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      {
        error: "Server error - check logs",
      },
      { status: 500 },
    )
  }
}
