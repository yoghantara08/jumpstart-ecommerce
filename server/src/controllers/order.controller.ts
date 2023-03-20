import { Request, Response } from "express";
import mongoose from "mongoose";
import Order from "../models/order.model";
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
