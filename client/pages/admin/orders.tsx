import AdminLayout from "@/components/admin/layout/main-layout";
import OrdersList from "@/components/admin/orders/orders-list";
import SearchInput from "@/components/admin/search/search-input";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";
import OrdersFilter from "@/components/website/user/orders-filter";
import { orderFilters } from "@/utils/orders-filter";
import React, { useState } from "react";

const AdminOrdersPage = () => {
  const [filterOrder, setFilterOrder] = useState<string>("ALL");
  const [search, setSearch] = useState<string | undefined>();

  console.log(search);

  return (
    <AdminProtectedPage>
      <AdminLayout title="Order Management">
        <div className="bg-light rounded-lg py-4 px-6 shadow-sm">
          <div className="flex flex-wrap justify-between items-center">
            <SearchInput setValue={setSearch} />
            <OrdersFilter
              filter={filterOrder}
              setFilter={setFilterOrder}
              filterItems={orderFilters}
            />
          </div>
          <OrdersList />
        </div>
      </AdminLayout>{" "}
    </AdminProtectedPage>
  );
};

export default AdminOrdersPage;
