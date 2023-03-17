import { Router } from "express";
import {
  addCartItem,
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
userRoute.post("/cart/:userId", addCartItem);

// update cart
userRoute.put("/cart/:userId", updateCartItem);

export default userRoute;
