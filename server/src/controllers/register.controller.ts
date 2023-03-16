import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { isValidObjectId } from "mongoose";
import { IProfile } from "src/types/user";
import User from "../models/user.model";
import { logger } from "../utils/logger";
import jwt from "jsonwebtoken";

// register account
export const registerAccount = async (req: Request, res: Response) => {
  // Catch validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // body request
    const { email, password, username } = req.body;

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
    });

    // Save new user
    const newUser = await user.save();

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

// register profile
export const registerProfile = async (req: Request, res: Response) => {
  try {
    // request body
    const { phoneNumber, country, city, address, postalCode, birthday } =
      req.body;

    // token
    const token = req.body.token;
    const payload: any = jwt.decode(token);

    if (!isValidObjectId(payload.userId)) {
      return res.status(400).json({ message: "Invalid ObjectID" });
    }

    // find user
    const user = await User.findById(payload.userId);
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    if (user.profile) {
      user.profile.phoneNumber = phoneNumber;
      user.profile.country = country;
      user.profile.city = city;
      user.profile.address = address;
      user.profile.postalCode = postalCode;
      user.profile.birthday = new Date(birthday);
    }
    user.isFirstLogin = false;

    await user.save();

    return res.status(200).json({ message: "Profile successfully updated" });
  } catch (error) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }
};
