import { Router } from "express";
import { getUserProfile } from "../controllers/profile.controller";
import isAuthenticated from "../middleware/isAuthenticated";

/**
 * User Routes
 * path: /user
 */
const userRoute = Router();

// get profile
userRoute.get("/profile", isAuthenticated, getUserProfile);

export default userRoute;
