import { Router } from "express";
import { registerAccount } from "../controllers/register.controller";
import { validateAccount } from "../validations/register-validation";

/**
 * Auth Routes
 * path: /auth
 */
const authRoute = Router();

// register
authRoute.post("/register", validateAccount, registerAccount);

// first time login
authRoute.post("/register-information");

// login local
authRoute.post("/login");

export default authRoute;
