import { Router } from "express";
import {
  addCategory,
  getCategories,
  addProduct,
} from "../controllers/admin-inventory.controller";
import { upload } from "../utils/multer-storage";

/**
 * Admin Routes
 * path: /admin
 */
const adminRoute = Router();

// add category
adminRoute.post("/add-category", addCategory);

// get categories
adminRoute.get("/categories", getCategories);

// add product
adminRoute.post("/add-product", upload.single("image"), addProduct);

export default adminRoute;
