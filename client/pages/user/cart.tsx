import { useCart } from "@/contexts/cart-context";
import React, { useEffect } from "react";

const UserCartPage = () => {
  const { cart, addItem, updateItem } = useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addItemHandler = () => {
    addItem("6414148d1d77c85afd21d697", 1);
  };

  const updateItemHandler = () => {
    updateItem("6414148d1d77c85afd21d697", 5);
  };

  return (
    <div>
      <button onClick={updateItemHandler}>Add item</button>
    </div>
  );
};

export default UserCartPage;
