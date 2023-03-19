import { CartItem } from "@/contexts/cart-context";
import { API } from "./config";

export const stripePaymentAPI = async (cartItems: CartItem[]) => {
  return await API.post("/stripe/payment", cartItems);
};
