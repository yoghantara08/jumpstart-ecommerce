import { Request, Response } from "express";
import mongoose from "mongoose";
import Cart from "../models/cart.model";
import Product from "../models/product.model";
import { logger } from "../utils/logger";

// GET CART
export const getCart = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const isValidId = mongoose.Types.ObjectId.isValid(userId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid userId!" });
  }

  try {
    const cart = await Cart.findOne({ userId }).populate("items.product");

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
export const addCartItem = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // find the product on the cart items
    const item = cart.items.find(
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      (cartItem) => cartItem.product.toString() === productId
    );

    // check if the item exist then update the item and if not exist push to the item into the cart
    if (item) {
      item.quantity += Number(quantity);
    } else {
      cart.items.push({ product, quantity });
    }

    await cart.save();

    return res
      .status(200)
      .json({ message: "Add item to cart successfully", cart });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
