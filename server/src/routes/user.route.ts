import { Router } from "express";
import { getCart } from "../controllers/cart.controller";
import { editProfile, getUserProfile } from "../controllers/profile.controller";
import isAuthenticated from "../middleware/isAuthenticated";

/**
 * User Routes
 * path: /user
 */
const userRoute = Router();

// get profile
userRoute.get("/profile", isAuthenticated, getUserProfile);

// update profile
userRoute.put("/profile", isAuthenticated, editProfile);

// get cart
userRoute.get("/cart/:userId", getCart);

// add item to cart
userRoute.post("/cart/:userId/:productId");

export default userRoute;
