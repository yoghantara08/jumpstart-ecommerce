import { Router } from "express";
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

export default userRoute;
