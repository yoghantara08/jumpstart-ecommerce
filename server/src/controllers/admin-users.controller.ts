import { Request, Response } from "express";
import User from "../models/user.model";
import { IProfile } from "../types/user";
import { logger } from "../utils/logger";
import bcrypt from "bcryptjs";
import Cart from "../models/cart.model";
import { validationResult } from "express-validator";

// get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");

    return res.status(200).json(users);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// add new user
export const addUser = async (req: Request, res: Response) => {
  // Catch validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // body request
    const { email, password, username, role } = req.body;

    // Hash password
    const hashedPw = await bcrypt.hash(password, 12);

    // Create new profile and define default value
    const newProfile: IProfile = {
      firstName: username,
      lastName: "",
      phoneNumber: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      birthday: new Date("01-01-2000"),
      image: "/images/user-default.png",
    };

    // Account
    const user = new User({
      email,
      password: hashedPw,
      profile: newProfile,
      isFirstLogin: false,
      role,
    });

    // Save new user
    const newUser = await user.save();

    // create new cart
    const cart = new Cart({ userId: newUser._id });
    await cart.save();

    return res.status(201).json({
      message: "User successfully created!",
      data: newUser,
    });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

// edit user
