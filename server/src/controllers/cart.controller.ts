import { Request, Response } from "express";
import mongoose from "mongoose";
import Cart from "../models/cart.model";
import { logger } from "../utils/logger";

// GET CART
export const getCart = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const isValidId = mongoose.Types.ObjectId.isValid(userId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid userId!" });
  }

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(400).json({ error: "Cart not found!" });
    }

    return res.status(200).json(cart);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// ADD ITEM INTO CART
export const addCartItem = async (req: Request, res: Response) => {};
