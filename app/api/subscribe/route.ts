import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log("Attempting to subscribe:", email)
    console.log("Environment variables check:", {
      hasApiKey: !!process.env.BEEHIIV_API_KEY,
      hasPubId: !!process.env.BEEHIIV_PUBLICATION_ID,
    })

    if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
      return NextResponse.json({ error: "Server configuration error - missing API credentials" }, { status: 500 })
    }

    const apiUrl = `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`
    console.log("Making request to:", apiUrl)

    const response = await fetch(apiUrl, {
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

    // Get the response as text first
    const responseText = await response.text()
    console.log("Beehiiv response body:", responseText)

    // Try to parse as JSON
    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch (e) {
      responseData = { message: "Could not parse response" }
    }

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      // Return specific error messages based on status code
      if (response.status === 401) {
        return NextResponse.json({ error: "Authentication failed - check your API key" }, { status: 401 })
      } else if (response.status === 404) {
        return NextResponse.json({ error: "Publication not found - check your publication ID" }, { status: 404 })
      } else if (response.status === 400) {
        // Handle validation errors
        const errorMessage = responseData.errors?.[0] || responseData.message || "Invalid request"
        return NextResponse.json({ error: errorMessage }, { status: 400 })
      } else {
        return NextResponse.json(
          { error: `Beehiiv error (${response.status}): ${JSON.stringify(responseData)}` },
          { status: response.status },
        )
      }
    }
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { error: `Server error: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 },
    )
  }
}
