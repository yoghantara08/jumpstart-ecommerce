import React, { useState } from "react";
import CustomersList from "@/components/admin/customers/customers-list";
import AdminLayout from "@/components/admin/layout/main-layout";
import SearchInput from "@/components/admin/search/search-input";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";

const CustomersManagement = () => {
  const [search, setSearch] = useState<string | undefined>("");

  console.log(search);

  return (
    <AdminProtectedPage>
      <AdminLayout title="Customers Management">
        <div className="bg-light rounded-lg py-4 px-6 shadow-sm">
          <SearchInput setValue={setSearch} />
          <CustomersList />
        </div>
      </AdminLayout>{" "}
    </AdminProtectedPage>
  );
};

export default CustomersManagement;
