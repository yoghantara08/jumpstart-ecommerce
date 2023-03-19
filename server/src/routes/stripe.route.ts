import { Router } from "express";
import { stripePayment } from "../controllers/stripe.controller";

/**
 * Stripe Routes
 * path: /stripe
 */
const stripeRoute = Router();

stripeRoute.post("/payment", stripePayment);

export default stripeRoute;
