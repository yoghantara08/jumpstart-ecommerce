import { Request, Response } from "express";
import { Stripe } from "stripe";
import config from "../config/config";
import { logger } from "../utils/logger";

const stripe = new Stripe(config.stripeSecretKey, { apiVersion: "2022-11-15" });

export const stripePayment = async (req: Request, res: Response) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.map((item) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const image = `http://localhost:8080/${item.product.image}`;
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product.name,
              images: [image],
            },
            unit_amount: item.product.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: item.product.stock,
          },
          quantity: item.quantity,
        };
      }),

      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      success_url: `${config.domain}/stripe?success=true`,
      cancel_url: `${config.domain}/stripe?canceled=true`,
    });

    if (session.url) {
      return res.json({ url: session.url });
    }
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
