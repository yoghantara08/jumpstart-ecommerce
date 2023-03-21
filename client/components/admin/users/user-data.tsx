import { IUser } from "@/types/user-type";
import formatDate from "@/utils/format-date";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

interface Props {
  user: IUser;
}

const UserData: React.FC<Props> = ({ user }) => {
  return (
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
        21
      </td>
      <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
        {user.provider}
      </td>
      <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
        {user.role}
      </td>
      <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
        <div className="flex gap-3">
          <MdEdit className="w-6 h-6 text-green-600 cursor-pointer" />
          <MdDelete className="w-6 h-6 text-red-600 cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default UserData;
