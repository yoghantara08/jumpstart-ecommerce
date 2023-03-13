import Image from "next/image";
import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { AnimationControls } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BiPowerOff } from "react-icons/bi";

interface Props {
  controls: AnimationControls;
  title: string;
}

const AdminNavbar: React.FC<Props> = ({ controls, title }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { mobile } = useWindowSize();

  useEffect(() => {
    if (!mobile) {
      setToggle(false);
    }
  }, [mobile]);

  return (
    <div className="flex h-16 w-full bg-light items-center px-5 justify-between gap-3">
      <div className="block lg:hidden">
        {!toggle ? (
          <FiMenu
            className="w-7 h-7 cursor-pointer"
            onClick={() => {
              controls.start("animate");
              setToggle(true);
            }}
          />
        ) : (
          <FiX
            className="w-7 h-7 cursor-pointer"
            onClick={() => {
              controls.start("exit");
              setToggle(false);
            }}
          />
        )}
      </div>
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium">{title}</h2>
      </div>
      <Menu>
        <div className="relative">
          <Menu.Button className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/user-default.png"
                alt="Admin"
                width={150}
                height={150}
              />
            </div>
            <p className="hidden lg:block font-medium">Alex Sulivan</p>
          </Menu.Button>
          <Menu.Items className="absolute rounded bg-light shadow mt-3 right-0 lg:w-full p-3 flex flex-col gap-2">
            <Menu.Item>
              <div className="flex items-center gap-3">
                <AiOutlineUser className="w-5 h-5" />
                <Link href="/admin/profile">Profile</Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center gap-3">
                <IoSettingsOutline className="w-5 h-5" />
                <Link href="/admin/settings">Settings</Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="flex items-center gap-3">
                <BiPowerOff className="w-5 h-5" />
                <Link href="/">Logout</Link>
              </div>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
};

export default AdminNavbar;
