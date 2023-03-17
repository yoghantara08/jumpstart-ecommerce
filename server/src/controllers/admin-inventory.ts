import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Category from "../models/category.model";
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
