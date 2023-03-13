import AdminLayout from "@/components/admin/layout/main-layout";
import OrdersList from "@/components/admin/orders/orders-list";
import OrdersFilter from "@/components/website/user/orders-filter";
import { orderFilters } from "@/utils/orders-filter";
import React, { useState } from "react";

const AdminOrdersPage = () => {
  const [filterOrder, setFilterOrder] = useState<string>("ALL");
  return (
    <AdminLayout title="Order Management">
      <div className="bg-light rounded-lg py-4 px-6 shadow-sm">
        <OrdersFilter
          filter={filterOrder}
          setFilter={setFilterOrder}
          filterItems={orderFilters}
        />
        <OrdersList />
      </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;
