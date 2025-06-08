import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { email } = await request.json()

    console.log("=== SUBSCRIPTION ATTEMPT ===")
    console.log("Email:", email)
    console.log("Has API Key:", !!process.env.BEEHIIV_API_KEY)
    console.log("Has Pub ID:", !!process.env.BEEHIIV_PUBLICATION_ID)

    if (process.env.BEEHIIV_API_KEY) {
      console.log("API Key starts with:", process.env.BEEHIIV_API_KEY.substring(0, 10) + "...")
    }
    if (process.env.BEEHIIV_PUBLICATION_ID) {
      console.log("Pub ID starts with:", process.env.BEEHIIV_PUBLICATION_ID.substring(0, 10) + "...")
    }

    if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
      console.log("❌ Missing environment variables")
      return NextResponse.json({ error: "Missing API credentials" }, { status: 500 })
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
    console.log("Beehiiv response body:", responseText)

    if (response.ok) {
      console.log("✅ Subscription successful!")
      return NextResponse.json({ success: true })
    } else {
      console.log("❌ Beehiiv API error")

      let errorMessage = "Failed to subscribe"

      if (response.status === 401) {
        errorMessage = "Invalid API key - check your Beehiiv credentials"
      } else if (response.status === 404) {
        errorMessage = "Publication not found - check your publication ID"
      } else if (response.status === 400) {
        try {
          const errorData = JSON.parse(responseText)
          if (errorData.errors && errorData.errors.length > 0) {
            errorMessage = errorData.errors[0]
          }
        } catch (e) {
          // Keep default message
        }
      }

      return NextResponse.json({ error: errorMessage }, { status: 400 })
    }
  } catch (error) {
    console.log("❌ Server error:", error.message)
    return NextResponse.json({ error: "Server error: " + error.message }, { status: 500 })
  }
}
