import React from "react";
import UserSidebar from "../user/sidebar";

interface Props {
  children: React.ReactNode;
}

const UserContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="md:w-full lg:container py-5 px-4 flex gap-4 w-full">
        <UserSidebar />
        <div className="w-full rounded bg-white border border-gray-300 p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
