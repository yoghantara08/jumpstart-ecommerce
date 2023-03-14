import { NextFunction, Request, Response } from "express";
import { IUser } from "src/types/user";
import { logger } from "../utils/logger";

// register account
export const registerAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: IUser = req.body;
};

// register information

// login local
