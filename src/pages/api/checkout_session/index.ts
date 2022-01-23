import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // https://github.com/stripe/stripe-node#configuration
  apiVersion: "2020-08-27",
});

async function CreateStripeSession(req: NextApiRequest, res: NextApiResponse) {
  const redirectURL = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://stripe-checkout-next-js-demo.vercel.app';

  const item = req.body;

  const transformedItems = {
    price_data: {
      currency: 'usd',
      product_data: {
        images: [item.image],
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    description: 'this is shoes',
    quantity: item.quantity,
  }

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const params: Stripe.Checkout.SessionCreateParams = {
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [transformedItems],
        success_url: redirectURL,
        cancel_url: redirectURL,
      };
      const checkoutSession: Stripe.Checkout.Session =
        await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

export default CreateStripeSession;
