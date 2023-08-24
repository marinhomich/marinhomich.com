"use server"

import { stripe } from "./stripe"

export const stripeSession = async () => {
  const stripeSession = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: process.env.STRIPE_PRDUCT_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: process.env.NEXT_PUBLIC_APP_URL || "",
    cancel_url: process.env.NEXT_PUBLIC_APP_URL,
  })

  if (stripeSession.url) {
    return stripeSession.url
  }
}
