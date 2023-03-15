import cors from "cors";
import express, { type Express } from "express";
import path from "path";
import config from "./config/config";
import routes from "./routes";
import connectDB from "./utils/connect-db";
import { logger } from "./utils/logger";

const app: Express = express();

// enable cors
app.use(cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// serve static file
app.use("/images", express.static(path.join(__dirname, "../public")));

// routes
app.use("/api", routes);

// connect db
connectDB();

// port
app.listen(config.port, () =>
  logger.info(
    `Server is listening on port ${config.port}, url: http://localhost:${config.port}`
  )
);
