import { CartItem } from "@/contexts/cart-context";
import { API } from "./config";

export const stripePaymentAPI = async (
  cartItems: CartItem[],
  token: string | null
) => {
  return await API.post("/stripe/payment", cartItems, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const saveOrderAPI = async (
  cartItems: CartItem[],
  token: string | null,
  userId: string,
  key: string
) => {
  return await API.post(`/stripe/save-order/${userId}/${key}`, cartItems, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
