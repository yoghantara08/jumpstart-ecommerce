import mongoose from "mongoose";
import config from "../config/config";
import { logger } from "./logger";

const connectDB = () => {
  mongoose.set({ strictQuery: true });
  mongoose
    .connect(`${config.db}`)
    .then(() => {
      logger.info("Connected to mongoDB");
    })
    .catch((err) => {
      logger.error(err);
    });
};

export default connectDB;
