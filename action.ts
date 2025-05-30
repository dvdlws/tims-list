'use server'

import { subscribeToNewsletter } from "./actions"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get('email') as string
  
  if (!email || !email.includes('@')) {
    return { success: false, message: 'Please enter a valid email address.' }
  }
  
  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${process.env.KIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: process.env.KIT_API_KEY,
        email: email,
      }),
    })
    
    const data = await response.json()
    
    if (data.subscription) {
      return { success: true, message: 'Thank you for subscribing!' }
    } else {
      return { success: false, message: 'Something went wrong. Please try again.' }
    }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}