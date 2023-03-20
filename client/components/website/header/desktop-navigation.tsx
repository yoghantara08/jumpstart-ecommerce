import { useAuth } from "@/contexts/auth-context";
import { useCart } from "@/contexts/cart-context";
import { calculateCartTotal } from "@/utils/calculate-cart";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import AdminUserMenu from "./admin-user-menu";
import SearchBar from "./search-bar";
import UserMenu from "./user-menu";

const DesktopNavigation = () => {
  const { isLoggedIn, user } = useAuth();
  const { cart } = useCart();
  const { totalItems } = calculateCartTotal(cart);

  return (
    <div className="hidden lg:flex gap-3 w-full">
      <ul className="flex items-center gap-4 font-medium">
        <li>
          <Link href="/" className="text-xl font-bold italic mr-3">
            Jumpstart.
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
      <SearchBar />
      <ul className="flex items-center gap-3">
        {isLoggedIn === "AUTHENTICATED" && (
          <>
            <Link href="/user/cart">
              <li className="py-2 px-3 rounded hover:bg-gray-50 relative">
                <MdOutlineShoppingCart className="text-2xl" />
                {totalItems !== 0 && (
                  <p
                    className="absolute right-0 top-0 -mt-1 mr-1 rounded-full bg-red-400
                text-xs leading-none min-w-[20px] min-h-[20px] flex items-center justify-center text-white font-medium"
                  >
                    {totalItems}
                  </p>
                )}
              </li>
            </Link>
            <li>{user.role === "USER" ? <UserMenu /> : <AdminUserMenu />}</li>
          </>
        )}

        {isLoggedIn === "UNAUTHENTICATED" && (
          <>
            <li>
              <Link href="/auth/login">
                <button className="button-primary-outlined py-2">Login</button>
              </Link>
            </li>
            <li>
              <Link href="/auth/register">
                <button className="button-primary py-2">Register</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DesktopNavigation;
