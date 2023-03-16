import { NextFunction, Request, Response, Router } from "express";
import { loginLocal } from "../controllers/login.controller";
import {
  registerAccount,
  registerProfile,
} from "../controllers/register.controller";
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

// update profile first login
authRoute.put("/register/:userId", registerProfile);

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
          // Handle error message
          const message: string = err.message;
          return res.redirect(
            `http://localhost:3000/auth/google?error=${message}`
          );
        }
        if (!user) {
          // Handle user not found error
          return res.redirect(
            `http://localhost:3000/auth/google?notFound=true`
          );
        }
        // Redirect to client with token
        const { token } = user as { token: string };
        return res.redirect(`http://localhost:3000/auth/google?token=${token}`);
      }
    )(req, res, next);
  }
);

export default authRoute;
