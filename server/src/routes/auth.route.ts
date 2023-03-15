import { NextFunction, Request, Response, Router } from "express";
import { loginLocal } from "../controllers/login.controller";
import { registerAccount } from "../controllers/register.controller";
import { validateAccount } from "../validations/register-validation";

import passport from "passport";
import "../controllers/google-login.controller";

/**
 * Auth Routes
 * path: /auth
 */
const authRoute = Router();

// register
authRoute.post("/register", validateAccount, registerAccount);

// register information
authRoute.post("/register-information");

// local login
authRoute.post("/login", loginLocal);

// google login
authRoute.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authRoute.get(
  "/google/callback",
  (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "google",
      {
        failureRedirect: "http://localhost:3000/auth/failed",
        session: false,
      },
      (err: any, user: any, info: any) => {
        if (err) {
          return res.status(401).json({ err: err.message });
        }
        if (!user) {
          // Handle user not found error
          return res.status(401).json({ message: "User not found" });
        }
        // Redirect to client with token
        const token: string = (req.user as { token: string }).token;
        return res.redirect(
          `http://localhost:3000/auth/success?token=${token}`
        );
      }
    )(req, res, next);
  }
);

export default authRoute;
