import { Request, Response } from "express";
import Order from "../models/order.model";
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
