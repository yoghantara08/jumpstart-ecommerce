import { useCart } from "@/contexts/cart-context";
import { calculateCartTotal } from "@/utils/calculate-cart";
import React, { useEffect } from "react";

const UserCartPage = () => {
  const { cart, addItem } = useCart();

  useEffect(() => {
    console.log(cart);

    const { totalItems, totalPrice } = calculateCartTotal(cart);

    console.log(totalItems);
    console.log(totalPrice);
  }, [cart]);

  return (
    <div>
      <button onClick={() => addItem("6414148d1d77c85afd21d697", 5)}>
        Cart Button
      </button>
    </div>
  );
};

export default UserCartPage;
