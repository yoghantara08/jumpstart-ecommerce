import { IUser } from "@/types/user-type";
import React from "react";
import UserData from "./user-data";

interface Props {
  users: IUser[];
}

const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <div className="relative overflow-x-auto mt-3">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              User ID
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Name
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Email
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Registered
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Total Orders
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Provider ID
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Role
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserData key={user._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
