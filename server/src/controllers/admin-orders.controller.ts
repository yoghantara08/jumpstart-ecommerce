/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-base-to-string */
import { Request, Response } from "express";
import mongoose from "mongoose";
import Order from "../models/order.model";
import Product from "../models/product.model";
import { logger } from "../utils/logger";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .populate("items.product", "-__v")
      .populate("userId", ["-password", "-__v"]);

    return res.status(200).json(orders);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

export const completeOrder = async (req: Request, res: Response) => {
  const orderId = req.params.orderId;
  const isValidId = mongoose.Types.ObjectId.isValid(orderId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid ObjectId!" });
  }

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(400).json({ message: "Order not found!" });
    }

    order.status = "COMPLETED";

    await order.save();

    return res.status(200).json({ message: "Order completed!" });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

export const cancelOrder = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  const isValidId = mongoose.Types.ObjectId.isValid(orderId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid ObjectId!" });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const order = await Order.findById(orderId).session(session);

    if (!order) {
      return res.status(400).json({ message: "Order not found!" });
    }

    // Update product stock
    for (const item of order.items) {
      const product = await Product.findById(item.product).session(session);

      if (!product) {
        return res
          .status(400)
          .json({ message: `Product not found: ${item.product}` });
      }

      product.stock += item.quantity;
      await product.save({ session });
    }

    order.status = "CANCELLED";

    await order.save({ session });

    await session.commitTransaction();
    await session.endSession();

    return res.status(200).json({ message: "Order cancelled!" });
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();

    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
