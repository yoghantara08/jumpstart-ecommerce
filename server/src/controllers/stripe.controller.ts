import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Stripe } from "stripe";
import config from "../config/config";
import { logger } from "../utils/logger";

const stripe = new Stripe(config.stripeSecretKey, { apiVersion: "2022-11-15" });

export const stripePayment = async (req: Request, res: Response) => {
  const token = req.body.token;
  const payload: any = jwt.decode(token);
  const key = jwt.sign(
    {
      userId: payload.userId,
    },
    config.stripeSecretKey,
    { expiresIn: "3m" }
  );
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
          quantity: item.quantity,
        };
      }),
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      success_url: `${config.domain}/stripe?key=${key}`,
      cancel_url: `${config.domain}/user/cart`,
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
