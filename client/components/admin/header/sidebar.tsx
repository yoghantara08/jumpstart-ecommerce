import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const adminLinks = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <RxDashboard className="w-5 h-5" />,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: <MdOutlineLocalShipping className="w-5 h-5" />,
  },
  {
    name: "Inventory",
    path: "/admin/inventory",
    icon: <FiShoppingBag className="w-5 h-5" />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <AiOutlineUser className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <IoSettingsOutline className="w-5 h-5" />,
  },
];

const AdminSidebar = () => {
  const { pathname } = useRouter();

  return (
    <aside
      className="flex flex-col justify-between gap-3 bg-darkBlue fixed top-0 bottom-0 w-[300px] 
        text-light p-8 mt-16 lg:mt-0 z-20"
    >
      <div>
        <h1 className="text-3xl font-bold italic mb-10">Jumpstart.</h1>
        <ul className="grid gap-5">
          {adminLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                link.path === pathname && "bg-lightBlue"
              } -ml-3 py-2 px-3 rounded block hover:bg-lightBlue`}
            >
              <li className="flex gap-3 items-center font-medium">
                {link.icon}
                <span>{link.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div
        className="flex gap-3 items-center cursor-pointer text-red-600 w-fit rounded border 
        border-red-600 px-5 py-2 hover:bg-[#ff000010]"
      >
        <span className="text-lg">Logout</span>
        <BsBoxArrowInRight className="w-5 h-5" />
      </div>
    </aside>
  );
};

export default AdminSidebar;
