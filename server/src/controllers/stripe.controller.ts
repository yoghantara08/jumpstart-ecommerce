import { Request, Response } from "express";
import { Stripe } from "stripe";
import config from "../config/config";
import { logger } from "../utils/logger";

const stripe = new Stripe(config.stripeSecretKey, { apiVersion: "2022-11-15" });

export const stripePayment = async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1MnMhlCow2yyQzWFRr6J7GL9",
          quantity: 1,
        },
      ],
      submit_type: "pay",
      mode: "payment",
      currency: "usd",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      success_url: `${config.domain}/stripe?success=true`,
      cancel_url: `${config.domain}/stripe?canceled=true`,
    });

    if (session.url) {
      res.redirect(303, session.url);
    }
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
