import Link from "next/link";
import SearchBar from "./search-bar";
// import { MdOutlineShoppingCart, MdMailOutline } from "react-icons/md";
// import UserMenu from "./user-menu";

const DesktopNavigation = () => {
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
        {/* <li>
          <MdOutlineShoppingCart className="text-2xl" />
        </li>
        <li>
          <MdMailOutline className="text-xl" />
        </li>
        <li>
          <UserMenu />
        </li> */}

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
      </ul>
    </div>
  );
};

export default DesktopNavigation;
