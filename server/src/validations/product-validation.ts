import { body } from "express-validator";
import Category from "../models/category.model";

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
