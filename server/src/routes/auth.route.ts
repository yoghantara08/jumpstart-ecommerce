import { Router } from "express";
import { registerAccount } from "../controllers/auth.controller";

/**
 * Auth Routes
 * path: /auth
 */
const authRoute = Router();

// register
authRoute.post("/register", registerAccount);

// first time login
authRoute.post("/register-information");

// login local
authRoute.post("/login");

export default authRoute;
