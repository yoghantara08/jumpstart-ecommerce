import React from "react";
import Link from "next/link";
import { adminSidebarVariants } from "@/animation/navigation-motion";
import { AnimatePresence, AnimationControls, motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiOutlineUser } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
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
    name: "Customers",
    path: "/admin/customers",
    icon: <AiOutlineUser className="w-5 h-5" />,
  },
  {
    name: "Chat",
    path: "/admin/chat",
    icon: <BsChatLeftDots className="w-5 h-5" />,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <IoSettingsOutline className="w-5 h-5" />,
  },
];

interface Props {
  controls: AnimationControls;
}

const AdminSidebar: React.FC<Props> = ({ controls }) => {
  const { pathname } = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        className="bg-darkBlue fixed top-0 bottom-0 w-[300px] text-light p-8 mt-16 lg:mt-0 z-20"
        variants={adminSidebarVariants}
        initial="initial"
        animate={controls}
        exit="exit"
      >
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
      </motion.aside>
    </AnimatePresence>
  );
};

export default AdminSidebar;
