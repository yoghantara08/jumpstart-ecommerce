import { Router } from "express";
import {
  addCategory,
  addProduct,
  editProduct,
} from "../controllers/admin-inventory.controller";
import { upload } from "../utils/multer-storage";
import {
  categoryValidation,
  productValidation,
} from "../validations/product-validation";

/**
 * Admin Routes
 * path: /admin
 */
const adminRoute = Router();

// add category
adminRoute.post("/add-category", categoryValidation, addCategory);

// add product
adminRoute.post(
  "/add-product",
  upload.single("image"),
  productValidation,
  addProduct
);

// edit product
adminRoute.post(
  "/edit-product/:slug",
  upload.single("image"),
  productValidation,
  editProduct
);

export default adminRoute;
