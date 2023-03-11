import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const sidebarLinks = [
  {
    name: "Profile",
    path: "/user/profile",
    icon: <AiOutlineUser className="w-5 h-5" />,
  },
  {
    name: "Orders",
    path: "/user/orders",
    icon: <FiShoppingBag className="w-5 h-5" />,
  },
  {
    name: "Shopping Cart",
    path: "/user/cart",
    icon: <MdOutlineShoppingCart className="w-5 h-5" />,
  },
  {
    name: "Chat",
    path: "/user/chat",
    icon: <BsChatLeftDots className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/user/settings",
    icon: <IoSettingsOutline className="w-5 h-5" />,
  },
];

const UserSidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="w-full hidden md:max-w-[15rem] lg:max-w-xs md:flex md:flex-col rounded bg-white border border-gray-300 py-3 h-fit">
      <div className="px-5 border-b w-full pb-3 flex items-center gap-4">
        <div className="w-14 lg:w-16 h-14 lg:h-16 rounded-full overflow-hidden">
          <Image
            src="/user-default.png"
            alt="user"
            width={126}
            height={126}
            className="w-full h-full"
          />
        </div>
        <p className="lg:text-xl mb-3 font-medium">Alex Sulivan</p>
      </div>
      <ul className="px-5 py-3 pb-10">
        {sidebarLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${
              link.path === pathname && "bg-gray-100"
            } py-2 px-3 mb-1 rounded hover:bg-gray-100 cursor-pointer block`}
          >
            <li className="flex items-center space-x-2 lg:text-lg">
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default UserSidebar;
