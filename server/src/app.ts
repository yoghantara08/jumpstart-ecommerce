import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import connectDB from "./utils/connect-db";
import config from "./config/config";
import routes from "./routes";
import { logger } from "./utils/logger";

const app: Express = express();

// enable cors
app.use(cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", (req: Request, res: Response) => {
  res.status(200).json({ status: 200, message: "Server Up!" });
});
app.use("/api", routes);

// connect db
connectDB();

// port
app.listen(config.port, () =>
  logger.info(
    `Server is listening on port ${config.port}, url: http://localhost:${config.port}`
  )
);
