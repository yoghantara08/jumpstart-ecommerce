import { Request, Response } from "express";
import mongoose from "mongoose";
import { Stripe } from "stripe";
import config from "../config/config";
import { logger } from "../utils/logger";
import Order from "../models/order.model";
import User from "../models/user.model";
import jwt from "jsonwebtoken";

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

export const saveOrder = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const isValidId = mongoose.Types.ObjectId.isValid(userId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid ObjectId!" });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const orderItems = req.body.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
    }));
    const order = new Order({
      userId: user._id,
      items: orderItems,
      totalPrice: req.body.reduce(
        (total, item) =>
          Number(total) + Number(item.product.price) * Number(item.quantity),
        0
      ),
    });

    const newOrder = await order.save();

    return res
      .status(200)
      .json({ message: "Order successfully saved!", order: newOrder });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
