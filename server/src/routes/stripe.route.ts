import { Router } from "express";
import { saveOrder, stripePayment } from "../controllers/stripe.controller";
import isAuthenticated from "../middleware/isAuthenticated";
import successPayment from "../middleware/successPayment";

/**
 * Stripe Routes
 * path: /stripe
 */
const stripeRoute = Router();

stripeRoute.post("/payment", isAuthenticated, stripePayment);

stripeRoute.post(
  "/save-order/:userId/:key",
  isAuthenticated,
  successPayment,
  saveOrder
);

export default stripeRoute;
