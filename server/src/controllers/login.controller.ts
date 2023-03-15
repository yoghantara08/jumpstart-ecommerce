import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import config from "../config/config";
import { logger } from "../utils/logger";

// Login local
export const loginLocal = async (req: Request, res: Response) => {
  try {
    // request body
    const { email, password } = req.body;

    // find user by email
    const user = await User.findOne({ email });

    // check if user exist
    if (!user) {
      return res.status(401).json({ message: "User can't be found!" });
    }

    // check if correct password
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(401).json({ message: "Wrong password!" });
    }

    // Generate JWT for login
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
        isFirstLogin: user.isFirstLogin,
      },
      config.secretKey,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
