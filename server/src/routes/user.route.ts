import { Router } from "express";
import {
  addCartItem,
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
userRoute.get("/cart/:userId", getCart);

// add item to cart
// productId & quantity
userRoute.post("/cart/:userId", addCartItem);

// update cart
// productId & quantity
userRoute.put("/cart/:userId", updateCartItem);

// delete cart item
// productId
userRoute.delete("/cart/:userId", deleteCartItem);

export default userRoute;
