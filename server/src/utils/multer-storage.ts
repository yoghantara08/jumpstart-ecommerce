import multer from "multer";
import path from "path";

// Define the Multer storage configuration
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, path.join(__dirname, "../../public")); // Destination folder for image uploads
  },
  filename: function (_req, file: { originalname: string }, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // File name with timestamp to avoid duplicates
  },
});

// Define multer file filter, accept only png,jpg,jpeg image type
const fileFilter = (
  _req: any,
  file: { mimetype: string },
  cb: (arg0: null, arg1: boolean) => void
) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Export the configured Multer upload function
export const upload = multer({ storage, fileFilter });
