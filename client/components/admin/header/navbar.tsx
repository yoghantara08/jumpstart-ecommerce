import AdminUserMenu from "@/components/website/header/admin-user-menu";
import useWindowSize from "@/hooks/useWindowSize";
import React, { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const AdminNavbar: React.FC<Props> = ({ toggle, setToggle, title }) => {
  const { mobile } = useWindowSize();

  useEffect(() => {
    if (!mobile) {
      setToggle(false);
    }
  }, [mobile, setToggle]);

  return (
    <div className="flex h-16 w-full bg-light items-center px-5 justify-between gap-3">
      <div className="block lg:hidden">
        {!toggle ? (
          <FiMenu
            className="w-7 h-7 cursor-pointer"
            onClick={() => {
              setToggle(true);
            }}
          />
        ) : (
          <FiX
            className="w-7 h-7 cursor-pointer"
            onClick={() => {
              setToggle(false);
            }}
          />
        )}
      </div>
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium">{title}</h2>
      </div>
      <AdminUserMenu />
    </div>
  );
};

export default AdminNavbar;
