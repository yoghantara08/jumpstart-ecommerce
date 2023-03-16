import AuthContext from "@/contexts/auth-context";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiPowerOff } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const UserMenu = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex justify-center">
      <Menu>
        <div className="relative">
          <Menu.Button className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/user-default.png"
                alt="User"
                width={150}
                height={150}
              />
            </div>
            <p className="font-medium whitespace-nowrap">Alex Sulivan</p>
          </Menu.Button>
          <Menu.Items className="absolute w-full z-20 rounded bg-white shadow mt-3 lg:right-0 lg:w-full py-1 flex flex-col">
            <Menu.Item>
              <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200">
                <AiOutlineUser className="w-5 h-5" />
                <Link href="/user/profile">Profile</Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200">
                <MdOutlineShoppingCart className="w-5 h-5" />
                <Link href="/user/cart">Cart</Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center gap-3 px-3 py-1 hover:bg-gray-200">
                <IoSettingsOutline className="w-5 h-5" />
                <Link href="/user/settings">Settings</Link>
              </div>
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
