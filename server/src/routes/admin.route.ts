import { Router } from "express";
import {
  addCategory,
  addProduct,
  editProduct,
} from "../controllers/admin-inventory.controller";
import {
  cancelOrder,
  completeOrder,
  getOrders,
} from "../controllers/admin-orders.controller";
import { addUser, getUsers } from "../controllers/admin-users.controller";
import isAdmin from "../middleware/isAdmin";
import isAuthenticated from "../middleware/isAuthenticated";
import { upload } from "../utils/multer-storage";
import {
  categoryValidation,
  productValidation,
} from "../validations/product-validation";
import { validateAddUser } from "../validations/register-validation";

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
// get orders
adminRoute.get("/orders", isAuthenticated, isAdmin, getOrders);

// complete order
adminRoute.put(
  "/orders/complete/:orderId",
  isAuthenticated,
  isAdmin,
  completeOrder
);

// cancel order
adminRoute.put(
  "/orders/cancel/:orderId",
  isAuthenticated,
  isAdmin,
  cancelOrder
);

// USERS
// get all user
adminRoute.get("/users", isAuthenticated, isAdmin, getUsers);

// add user
adminRoute.post(
  "/users/add",
  isAuthenticated,
  isAdmin,
  validateAddUser,
  addUser
);

export default adminRoute;
