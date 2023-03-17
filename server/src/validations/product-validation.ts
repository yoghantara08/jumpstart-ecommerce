import { body } from "express-validator";
import Category from "../models/category.model";
import Product from "../models/product.model";

export const categoryValidation = [
  // name
  body("name")
    .custom(async (value) => {
      const category = await Category.findOne({ name: value });
      if (category) {
        return await Promise.reject("Category name has already exist!");
      }
    })
    .normalizeEmail(),
];

export const productValidation = [
  // slug
  body("slug")
    .custom(async (value) => {
      const product = await Product.findOne({ slug: value });
      if (product) {
        return await Promise.reject("Product slug has already exist!");
      }
    })
    .normalizeEmail(),
];
