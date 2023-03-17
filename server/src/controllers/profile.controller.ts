import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { logger } from "../utils/logger";

export const getUserProfile = async (req: Request, res: Response) => {
  const token = req.body.token;
  const payload: any = jwt.decode(token);

  try {
    const user = await User.findOne({ email: payload.email }).select([
      "-password",
      "-__v",
    ]);

    if (!user) {
      return res.status(400).json("User not found!");
    }

    return res.status(200).json(user);
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};

export const editProfile = async (req: Request, res: Response) => {
  const token = req.body.token;
  const payload: any = jwt.decode(token);
  const {
    firstName,
    lastName,
    phoneNumber,
    country,
    city,
    address,
    postalCode,
  } = req.body;

  try {
    const user = await User.findOne({ email: payload.email }).select([
      "-password",
      "-__v",
    ]);

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    if (user.profile) {
      user.profile.firstName = firstName;
      user.profile.lastName = lastName;
      user.profile.phoneNumber = phoneNumber;
      user.profile.country = country;
      user.profile.city = city;
      user.profile.address = address;
      user.profile.postalCode = postalCode;
    }

    await user.save();

    return res.status(200).json({ message: "Edit user successfully!", user });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
