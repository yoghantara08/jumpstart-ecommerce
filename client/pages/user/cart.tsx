import { useCart } from "@/contexts/cart-context";
import React from "react";

const UserCartPage = () => {
  const { cart, addItem, updateItem, deleteItem, clearCart } = useCart();

  console.log(cart);

  return (
    <div>
      <button onClick={clearCart}>Cart Button</button>
    </div>
  );
};

export default UserCartPage;
