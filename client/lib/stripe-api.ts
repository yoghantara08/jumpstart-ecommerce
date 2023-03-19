import { CartItem } from "@/contexts/cart-context";
import { loadStripe } from "@stripe/stripe-js";
import { Stripe } from "@stripe/stripe-js/types/stripe-js";
import { API } from "./config";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MnM6sCow2yyQzWFEoxBXItfaPDq6vmHbzDQkoH3FSLyblivpPUYULMg33PGPrnsEUzf0AFiuVHkzUCtj5hAR6Vg00JDcPURiQ"
    );
  }

  return stripePromise;
};

export const stripePaymentAPI = async (cartItems: CartItem[]) => {
  return await API.post("/stripe/payment", cartItems);
};
