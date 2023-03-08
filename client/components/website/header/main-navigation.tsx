import { MdOutlineShoppingCart, MdMailOutline } from "react-icons/md";
import CategoryDropdown from "./category-dropdown";
import SearchBar from "./search-bar";
import UserMenu from "./user-menu";

const MainNavigation = () => {
  return (
    <nav className="flex px-6 lg:px-8 py-3 shadow">
      <div className="hidden lg:flex gap-3 w-full">
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <h1 className="text-xl font-bold italic drop-shadow">Jumpstart.</h1>
          </li>
          <li>Home</li>
          <li>
            <CategoryDropdown />
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <SearchBar />
        <ul className="flex items-center gap-4">
          <li>
            <MdOutlineShoppingCart className="text-xl" />
          </li>
          <li>
            <MdMailOutline className="text-xl" />
          </li>
          <li>
            <UserMenu />
          </li>

          <li>
            <button className="button-primary-outlined">Login</button>
          </li>
          <li>
            <button className="button-primary">Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
