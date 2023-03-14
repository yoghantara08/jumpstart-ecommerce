import { NextFunction, Request, Response } from "express";
import { IUser } from "src/types/user";
import { logger } from "../utils/logger";
import { validationResult } from "express-validator";

// register account
export const registerAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: IUser = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    logger.info(body);
    return res.status(200).json({ body });
  } catch (error) {
    return res.status(500);
  }
};

// register information

// login local
