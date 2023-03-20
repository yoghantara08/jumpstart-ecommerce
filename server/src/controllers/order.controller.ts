/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from "express";
import mongoose from "mongoose";
import Order from "../models/order.model";
import Product from "../models/product.model";
import User from "../models/user.model";
import { logger } from "../utils/logger";

export const getOrderHistory = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const isValidId = mongoose.Types.ObjectId.isValid(userId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid ObjectId!" });
  }

  try {
    const orderHistory = await Order.find({ userId }).populate("items.product");

    if (!orderHistory) {
      return res.status(200).json([]);
    }

    return res.status(200).json(orderHistory);
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

  const session = await mongoose.startSession();
  session.startTransaction();

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

    const newOrder = await order.save({ session });

    // Update product stock
    for (const item of req.body) {
      const product = await Product.findById(item.product._id).session(session);

      if (!product) {
        return res
          .status(400)
          .json({ message: `Product not found: ${item.product._id}` });
      }

      if (product.stock < item.quantity) {
        return res
          .status(400)
          .json({
            message: `Insufficient stock for product: ${item.product._id}`,
          });
      }

      product.stock -= item.quantity;
      await product.save({ session });
    }

    await session.commitTransaction();
    await session.endSession();

    return res
      .status(200)
      .json({ message: "Order successfully saved!", order: newOrder });
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();

    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
