import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Category from "../models/category.model";
import Product from "../models/product.model";
import { logger } from "../utils/logger";
import clearFileUpload from "../utils/clear-file-upload";

// ADD CATEGORY
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

// ADD PRODUCT
export const addProduct = async (req: Request, res: Response) => {
  const file = req.file?.filename;
  // check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    clearFileUpload(file);
    return res.status(400).json({ errors: errors.array() });
  }

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

    const findCategory: any = await Category.findOne({ name: category });

    if (!findCategory) {
      return res.status(400).json({ message: "Category not found!" });
    }

    const product = new Product({
      name,
      slug,
      price,
      stock,
      category,
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

// EDIT PRODUCT
export const editProduct = async (req: Request, res: Response) => {
  const file = req.file?.filename;
  // check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    clearFileUpload(file);
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const productSlug = req.params.slug;
    const { name, price, stock, description, weight, isFeatured } = req.body;

    const product = await Product.findOne({ slug: productSlug });

    if (!product) {
      return res.status(400).json({ message: "Product not found!" });
    }

    product.name = name;
    product.price = price;
    product.stock = stock;
    product.description = description;
    product.weight = weight;
    product.isFeatured = isFeatured;

    if (file) {
      const deleteFile = product.image.split("/").pop();
      clearFileUpload(deleteFile);
      product.image = `images/${file}`;
    }

    const editedProduct = await product.save();

    return res
      .status(201)
      .json({ message: "Product edited!", product: editedProduct });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
