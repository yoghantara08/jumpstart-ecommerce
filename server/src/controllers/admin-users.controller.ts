import { Request, Response } from "express";
import User from "../models/user.model";
import { logger } from "../utils/logger";

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

// edit user
