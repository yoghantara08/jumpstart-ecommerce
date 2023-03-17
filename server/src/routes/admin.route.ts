import { Router } from "express";
import { addCategory } from "../controllers/admin-inventory";

/**
 * Admin Routes
 * path: /admin
 */
const adminRoute = Router();

// add category
adminRoute.post("/add-category", addCategory);

export default adminRoute;
