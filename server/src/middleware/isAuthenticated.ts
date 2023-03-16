import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, config.secretKey);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: error.message || "Internal server error!" });
  }

  if (!decodedToken) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  next();
};

export default isAuthenticated;
