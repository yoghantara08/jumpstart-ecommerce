import { Router } from "express";
import {
  addCartItem,
  clearCartItem,
  deleteCartItem,
  getCart,
  updateCartItem,
} from "../controllers/cart.controller";
import { editProfile, getUserProfile } from "../controllers/profile.controller";
import isAuthenticated from "../middleware/isAuthenticated";

/**
 * User Routes
 * path: /user
 */
const userRoute = Router();

// PROFILE
// get profile
userRoute.get("/profile", isAuthenticated, getUserProfile);

// update profile
userRoute.put("/profile", isAuthenticated, editProfile);

// SHOPPING CART
// get cart
userRoute.get("/cart/:userId", isAuthenticated, getCart);

// add item to cart
// productId & quantity
userRoute.post("/cart/:userId", isAuthenticated, addCartItem);

// update cart
// productId & quantity
userRoute.put("/cart/:userId", isAuthenticated, updateCartItem);

// delete cart item
userRoute.delete("/cart/:userId/:productId", isAuthenticated, deleteCartItem);

// clear cart item
userRoute.put("/cart/clear-cart/:userId", isAuthenticated, clearCartItem);

export default userRoute;
