import Link from "next/link";
import CategoryDropdown from "./category-dropdown";
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
          <CategoryDropdown />
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
          <button className="button-primary-outlined">Login</button>
        </li>
        <li>
          <button className="button-primary">Register</button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavigation;
