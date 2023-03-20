import MainLayout from "@/components/website/layout/main-layout";
import { useAuth } from "@/contexts/auth-context";
import { useCart } from "@/contexts/cart-context";
import { saveOrderAPI } from "@/lib/stripe-api";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";

const StripeSuccessPayment = () => {
  const { query } = useRouter();
  const { token, user } = useAuth();
  const { cart, clearCart } = useCart();

  useEffect(() => {
    const handleSaveOrder = async () => {
      try {
        const response = await saveOrderAPI(
          cart.cartItems,
          token,
          user._id,
          query.key as string
        );
        await clearCart();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    if (cart.cartItems.length !== 0 && query.key) {
      handleSaveOrder();
    }
  }, [cart.cartItems, clearCart, token, user._id, query]);

  return (
    <MainLayout title="Success Payment">
      <div className="flex justify-center items-center h-full w-full px-5">
        <div
          className="flex flex-col justify-center items-center w-full max-w-3xl border border-gray-200 bg-gray-100 rounded 
          py-10 p-5 gap-2 md:gap-3 text-center md:-mt-36"
        >
          <BsFillBagCheckFill className="text-green-600 text-3xl" />
          <h1 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-slate-600">
            Thank You For Your Purchase
          </h1>
          <p className="font-medium font-montserrat text-sm">
            If you have any questions, please email
            <span className="text-tosca"> jumpstart@gmail.com</span>
          </p>
          <Link
            href="/products"
            className="bg-tosca text-white px-5 py-2 lg:py-3 rounded hover:opacity-80 mt-3"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default StripeSuccessPayment;
