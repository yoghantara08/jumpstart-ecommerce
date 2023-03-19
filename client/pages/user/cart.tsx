import AuthenticatedPage from "@/components/website/hoc/authenticated";
import MainLayout from "@/components/website/layout/main-layout";
import CartItem from "@/components/website/user/cart-item";
import { useCart } from "@/contexts/cart-context";
import { getStripe, stripePaymentAPI } from "@/lib/stripe-api";
import { calculateCartTotal } from "@/utils/calculate-cart";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

const UserCartPage = () => {
  const { cart, clearCart } = useCart();
  const { totalItems, totalPrice } = calculateCartTotal(cart);

  const handleCheckout = async () => {
    const stripe = await getStripe();

    try {
      const response = await stripePaymentAPI(cart.cartItems);
      console.log(response);

      const data = response.data;

      stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthenticatedPage>
      <MainLayout title="Cart">
        <div className="flex justify-center">
          <div className="container py-6 md:py-8 px-4 ">
            {cart.cartItems.length === 0 ? (
              <div className="flex flex-col items-center">
                <picture className="w-96 mb-3">
                  <img
                    src="/no-item-cart.png"
                    alt="empty cart"
                    className="w-full h-full"
                  />
                </picture>
                <p className="text-3xl font-bold py-2">Your cart is empty</p>
                <p className="font-montserrat">
                  You have no items in your shopping cart.
                </p>
                <p className="font-montserrat">Lets go buy something!</p>
                <Link
                  href="/products"
                  className="flex rounded px-5 py-3 bg-red-400 text-white font-medium mt-3"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <h1 className="text-2xl font-bold">Shopping Cart</h1>
            )}
            {cart.cartItems.length !== 0 && (
              <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-5 mt-3">
                <div className="grid w-full gap-3">
                  <div className="grid gap-3 order-2 lg:order-1">
                    {cart.cartItems.map((item) => (
                      <CartItem
                        key={item.product._id}
                        product={item.product}
                        quantity={item.quantity}
                      />
                    ))}
                  </div>
                  <button
                    className="order-1 lg:order-2 w-fit border border-red-300 text-red-400 hover:bg-red-100  rounded px-5 py-2 font-medium"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="w-full lg:max-w-xs h-fit py-3 px-5 border border-gray-300 bg-white rounded">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <p>Total Items: {totalItems}</p>
                    <p>Total: $ {totalPrice}</p>
                  </div>
                  <button
                    className="flex items-center justify-center gap-2 font-medium text-white 
                  bg-tosca w-full py-3 rounded mt-3 hover:opacity-80"
                    onClick={handleCheckout}
                  >
                    <MdOutlineShoppingCart className="text-xl" />
                    <span className="mr-2">Checkout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    </AuthenticatedPage>
  );
};

export default UserCartPage;
