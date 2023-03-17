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

// GET FEATURED PRODUCTS
export const getFeaturedProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ isFeatured: true }).select("-__v");

    return res.status(200).json(products);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// GET PRODUCT DETAILS
export const getProductDetails = async (req: Request, res: Response) => {
  const productSlug = req.params.slug;

  try {
    const product = await Product.findOne({ slug: productSlug });

    if (!product) {
      return res.status(400).json({ message: "Product not found!" });
    }

    return res.status(200).json(product);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
