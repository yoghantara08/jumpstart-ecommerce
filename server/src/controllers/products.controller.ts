import { Request, Response } from "express";
import Category from "../models/category.model";
import Product from "../models/product.model";
import { logger } from "../utils/logger";

// GET CATEGORIES
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().select("-__v");

    return res.status(200).json(categories);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// GET PRODUCTS
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().select("-__v");

    return res.status(200).json(products);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
