import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Category from "../models/category.model";
import Product from "../models/product.model";
import { logger } from "../utils/logger";

export const addCategory = async (req: Request, res: Response) => {
  // check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // request body
  const { name, description } = req.body;

  try {
    const category = new Category({
      name,
      description,
    });

    const newCategory = await category.save();

    return res
      .status(201)
      .json({ message: "Category successfully added!", category: newCategory });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    return res.status(200).json(categories);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      slug,
      price,
      stock,
      description,
      category,
      condition,
      weight,
    } = req.body;

    const file = req.file?.filename;

    const findCategory: any = Category.findOne({ name: category });

    if (!findCategory) {
      return res.status(400).json({ message: "Category not found!" });
    }

    const product = new Product({
      name,
      slug,
      price,
      stock,
      category,
      categoryId: findCategory._id,
      description,
      condition,
      weight,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      image: `images/${file}`,
    });

    const newProduct = await product.save();

    return res
      .status(201)
      .json({ message: "Product added!", product: newProduct });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
