import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log("Attempting to subscribe:", email)

    if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          send_welcome_email: true,
        }),
      }
    )

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      const errorData = await response.json()
      return NextResponse.json(
        { error: errorData.message || "Failed to subscribe" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}