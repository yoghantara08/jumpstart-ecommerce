import { Request, Response } from "express";
import { logger } from "../utils/logger";
import Order from "../models/order.model";
import User from "../models/user.model";
import { ERoles } from "../types/ERoles";

export const getStats = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({
      status: { $in: ["COMPLETED", "PROCESSED"] },
    });
    const users = await User.find({
      role: ERoles.USER,
    });

    if (!orders) {
      return res.status(400).json({ message: "No orders found!" });
    }
    if (!users) {
      return res.status(400).json({ message: "No users found!" });
    }

    // calculate total revenue
    let revenue: number = 0;
    orders.map((order) => {
      revenue += Number(order.totalPrice);
    });

    // total customers
    const customers = users.length;

    // total order
    const totalOrder = orders.length;

    return res.status(200).json({ revenue, customers, totalOrder });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
