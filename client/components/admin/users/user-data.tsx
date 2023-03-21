import { useAuth } from "@/contexts/auth-context";
import { userTotalOrderAPI } from "@/lib/admin-api";
import { IUser } from "@/types/user-type";
import formatDate from "@/utils/format-date";
import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditUser from "./edit-user";

interface Props {
  user: IUser;
}

const UserData: React.FC<Props> = ({ user }) => {
  const { token } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [totalOrder, setTotalOrder] = useState();

  useEffect(() => {
    if (token) {
      userTotalOrderAPI(token, user._id)
        .then((res) => {
          setTotalOrder(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, user._id]);

  return (
    <>
      {isOpen && (
        <tr>
          <td colSpan={8}>
            <EditUser
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              user={user.profile}
              userId={user._id}
            />
          </td>
        </tr>
      )}
      <tr>
        <td className="border border-slate-200 px-6 py-3">#{user._id}</td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {user.profile.firstName} {user.profile.lastName}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {user.email}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {formatDate(user.createdAt)}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {totalOrder}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {user.provider}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {user.role}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          <div className="flex gap-3">
            <MdEdit
              className="w-6 h-6 text-green-600 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            <MdDelete className="w-6 h-6 text-red-600 cursor-pointer" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserData;
