import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";
import { logger } from "../utils/logger";

const successPayment = (req: Request, res: Response, next: NextFunction) => {
  const key = req.params.key;
  if (!key) {
    return res.status(401).json({ message: "Key not found!" });
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(key, config.stripeSecretKey);
  } catch (error: any) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }

  if (!decodedToken) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  next();
};

export default successPayment;
