import { body } from "express-validator";
import User from "../models/user.model";

export const validateAccount = [
  // EMAIL
  body("email")
    .isEmail()
    .withMessage("Please enter valid email")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        return await Promise.reject("Email has already taken!");
      }
    })
    .normalizeEmail(),

  // PASSWORD
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password length minimum is 6 characters"),

  // USERNAME
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username length minimum is 3 characters"),
];
