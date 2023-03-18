import { CartState } from "@/contexts/cart-context";

export const calculateCartTotal = (cart: CartState) => {
  let totalItems = 0;
  let totalPrice = 0;

  cart.cartItems.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += Number(item.product.price) * item.quantity;
  });

  return { totalItems, totalPrice };
};
