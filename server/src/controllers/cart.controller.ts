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
    const isValidId =
      mongoose.Types.ObjectId.isValid(userId) &&
      mongoose.Types.ObjectId.isValid(productId);
    if (!isValidId) {
      return res.status(400).json({ message: "Invalid ObjectId!" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cart = await Cart.findOne({ userId }).populate("items.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // find the product on the cart items
    let item: any = null;
    const items: any = cart.items;
    item = items.find((cartItem) => {
      return cartItem.product._id.toString() === productId;
    });

    // check if the item exist then update the item and if not exist push to the item into the cart
    if (item) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      item.quantity += Number(quantity);
    } else {
      cart.items.push({ product, quantity });
      item = items.find((cartItem) => {
        return cartItem.product._id.toString() === productId;
      });
    }

    await cart.save();

    return res
      .status(200)
      .json({ message: "Add item to cart successfully", item });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// UPDATE ITEM QUANTITY IN CART
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { quantity, productId } = req.body;
    const isValidId =
      mongoose.Types.ObjectId.isValid(userId) &&
      mongoose.Types.ObjectId.isValid(productId);
    if (!isValidId) {
      return res.status(400).json({ message: "Invalid ObjectId!" });
    }

    const cart = await Cart.findOne({ userId }).populate("items.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // find the product on the cart items
    const items: any = cart.items;
    const item = items.find((cartItem) => {
      return cartItem.product._id.toString() === productId;
    });

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    item.quantity = Number(quantity);

    await cart.save();

    return res
      .status(200)
      .json({ message: "Update item quantity in cart successfully", item });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// DELETE CART ITEM
export const deleteCartItem = async (req: Request, res: Response) => {
  const { userId, productId } = req.params;

  const isValidId =
    mongoose.Types.ObjectId.isValid(userId) &&
    mongoose.Types.ObjectId.isValid(productId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid ObjectId!" });
  }

  try {
    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const updatedItems: any = cart.items.filter((item) => {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      return item.product.toString() !== productId;
    });

    cart.items = updatedItems;

    await cart.save();

    return res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// CLEAR CART
export const clearCartItem = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const isValidId = mongoose.Types.ObjectId.isValid(userId);
  if (!isValidId) {
    return res.status(400).json({ message: "Invalid ObjectId!" });
  }

  try {
    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Clear all items in the cart
    const clearedItems: any = [];
    cart.items = clearedItems;

    // Save cart
    await cart.save();

    return res.status(200).json({ message: "Cart cleared!" });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
