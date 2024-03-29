import AuthContext from "@/contexts/auth-context";
import useAvatar from "@/hooks/useAvatar";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiPowerOff } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const UserMenu = () => {
  const { user, logout } = useContext(AuthContext);
  const { imageSrc } = useAvatar();

  return (
    <div className="flex justify-center">
      <Menu>
        <div className="relative">
          <Menu.Button className="flex items-center gap-3 min-w-[120px]">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={imageSrc || "/user-default.png"}
                alt={user.profile.firstName}
                width={150}
                height={150}
              />
            </div>
            <p className="font-medium whitespace-nowrap">
              {user.profile.firstName}
            </p>
          </Menu.Button>
          <Menu.Items className="absolute w-fit z-20 min-w-[140px] rounded bg-white shadow mt-3 lg:right-0 py-1 flex flex-col">
            <Menu.Item>
              <Link
                href="/user"
                className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200"
              >
                <AiOutlineUser className="w-5 h-5" />
                <p>Profile</p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/user/orders"
                className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200"
              >
                <FiShoppingBag className="w-5 h-5" />
                <p>Orders</p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/user/cart"
                className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200"
              >
                <MdOutlineShoppingCart className="w-5 h-5" />
                <p>Cart</p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                href="/user/settings"
                className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200"
              >
                <IoSettingsOutline className="w-5 h-5" />
                <p>Settings</p>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <div
                className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200 cursor-pointer"
                onClick={() => logout()}
              >
                <BiPowerOff className="w-5 h-5" />
                <span>Logout</span>
              </div>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
};

export default UserMenu;
