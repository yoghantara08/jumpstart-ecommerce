import { AnimationControls } from "framer-motion";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  controls: AnimationControls;
}

const AdminNavbar: React.FC<Props> = ({ controls }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex h-16">
      {!toggle ? (
        <FiMenu
          className="w-9 h-9 cursor-pointer"
          onClick={() => {
            controls.start("animate");
            setToggle(true);
          }}
        />
      ) : (
        <FiX
          className="w-9 h-9 cursor-pointer"
          onClick={() => {
            controls.start("exit");
            setToggle(false);
          }}
        />
      )}
    </div>
  );
};

export default AdminNavbar;
