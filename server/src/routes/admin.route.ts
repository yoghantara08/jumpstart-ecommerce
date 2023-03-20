import { Router } from "express";
import {
  addCategory,
  addProduct,
  editProduct,
} from "../controllers/admin-inventory.controller";
import { getOrders } from "../controllers/admin-orders.controller";
import isAdmin from "../middleware/isAdmin";
import isAuthenticated from "../middleware/isAuthenticated";
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

// INVENTORY
// add category
adminRoute.post(
  "/add-category",
  isAuthenticated,
  isAdmin,
  categoryValidation,
  addCategory
);

// add product
adminRoute.post(
  "/add-product",
  isAuthenticated,
  isAdmin,
  upload.single("image"),
  productValidation,
  addProduct
);

// edit product
adminRoute.post(
  "/edit-product/:slug",
  isAuthenticated,
  isAdmin,
  upload.single("image"),
  productValidation,
  editProduct
);

// ORDERS
adminRoute.get("/orders", isAuthenticated, isAdmin, getOrders);

export default adminRoute;
