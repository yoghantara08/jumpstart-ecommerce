import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ERoles } from "../types/ERoles";
import { logger } from "../utils/logger";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.body.token;

  let decodedToken;
  try {
    decodedToken = jwt.decode(token);
    if (decodedToken.role !== ERoles.ADMIN) {
      return res
        .status(401)
        .json({ message: "You don't have access to this resources!" });
    }
  } catch (error: any) {
    logger.error(error, "Internal Server Error 500");
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error 500", error });
  }

  next();
};

export default isAdmin;
