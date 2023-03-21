import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/layout/main-layout";
import SearchInput from "@/components/admin/search/search-input";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";
import { IUser } from "@/types/user-type";
import { getUsersAPI } from "@/lib/admin-api";
import { useAuth } from "@/contexts/auth-context";
import UsersList from "@/components/admin/users/users-list";
import { BiPlus } from "react-icons/bi";
import AddUser from "@/components/admin/users/add-user";

const UsersManagement = () => {
  const { token } = useAuth();
  const [search, setSearch] = useState<string | undefined>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [openAddUser, setOpenAddUser] = useState(false);

  useEffect(() => {
    if (token) {
      getUsersAPI(token)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  useEffect(() => {
    if (search === undefined || search === "") {
      // If search is empty, set the users to the original list
      setFilteredUsers(users);
    } else {
      // Filter the users based on the search term
      const filteredUsers = users.filter((user) => {
        const searchTerm = search.toLowerCase();
        return (
          user.email.toLowerCase().includes(searchTerm) ||
          user.profile.firstName.toLowerCase().includes(searchTerm) ||
          user.profile.lastName.toLowerCase().includes(searchTerm) ||
          user.provider.toLowerCase().includes(searchTerm) ||
          user.role.toLowerCase().includes(searchTerm)
        );
      });

      setFilteredUsers(filteredUsers);
    }
  }, [search, users]);

  return (
    <AdminProtectedPage>
      <AddUser isOpen={openAddUser} setIsOpen={setOpenAddUser} />
      <AdminLayout title="Users Management">
        <div className="bg-light rounded-lg py-4 px-6 shadow-sm">
          <div className="flex gap-3 flex-wrap justify-between items-center">
            <SearchInput setValue={setSearch} />
            <button
              className="flex gap-2 items-center px-5 py-2 rounded bg-lightBlue hover:opacity-80 text-white font-medium"
              onClick={() => setOpenAddUser(true)}
            >
              <BiPlus />
              <span>Add User</span>
            </button>
          </div>
          <UsersList users={filteredUsers} />
        </div>
      </AdminLayout>
    </AdminProtectedPage>
  );
};

export default UsersManagement;
