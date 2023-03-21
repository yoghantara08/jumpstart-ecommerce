/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { Request, Response } from "express";
import { logger } from "../utils/logger";
import Order from "../models/order.model";
import User from "../models/user.model";
import { ERoles } from "../types/ERoles";
import Product from "../models/product.model";

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

// get top selling products
export const getTopSellingProducts = async (req: Request, res: Response) => {
  try {
    // Get all completed orders
    const completedOrders = await Order.find({ status: "COMPLETED" });

    // Count the total number of times each product has been ordered
    const productSales = {};
    completedOrders.forEach((order: any) => {
      order.items.forEach((item) => {
        const productId = item.product.toString();
        if (productSales[productId]) {
          productSales[productId].quantity += item.quantity;
          productSales[productId].totalPrice += item.price * item.quantity;
        } else {
          productSales[productId] = {
            quantity: item.quantity,
            totalPrice: item.price * item.quantity,
          };
        }
      });
    });

    // Sort the products by their total sales in descending order
    const sortedProducts = Object.keys(productSales).sort(
      (a, b) => productSales[b].totalPrice - productSales[a].totalPrice
    );

    // Get the top 5 selling products and populate their details, along with the quantity and total price sold
    const topSellingProducts = await Product.find({
      _id: { $in: sortedProducts.slice(0, 5) },
    }).populate("categoryId", "name");

    const topSellingProductsDetails = topSellingProducts
      .map((product) => ({
        _id: product._id,
        name: product.name,
        slug: product.slug,
        category: product.category,
        image: product.image,
        price: product.price,
        quantity: productSales[product._id.toString()].quantity,
        totalPrice: productSales[product._id.toString()].totalPrice,
      }))
      .sort((a, b) => b.totalPrice - a.totalPrice);

    return res.status(200).json(topSellingProductsDetails);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
