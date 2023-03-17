import fs from "fs";
import path from "path";
import { logger } from "./logger";

const clearFileUpload = (filename: any) => {
  fs.unlink(path.join(__dirname, "../../public", filename), (err) => {
    if (err) {
      logger.error(err);
    }
  });
};

export default clearFileUpload;
