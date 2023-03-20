import AdminLayout from "@/components/admin/layout/main-layout";
import OrdersList from "@/components/admin/orders/orders-list";
import SearchInput from "@/components/admin/search/search-input";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";
import OrdersFilter from "@/components/website/user/orders-filter";
import { useAuth } from "@/contexts/auth-context";
import { getOrdersAPI } from "@/lib/admin-api";
import { IOrderManagement } from "@/types/admin-type";
import { orderFilters } from "@/utils/orders-filter";
import React, { useEffect, useState } from "react";

const AdminOrdersPage = () => {
  const { token } = useAuth();
  const [filterOrder, setFilterOrder] = useState<string>("ALL");
  const [search, setSearch] = useState<string | undefined>();
  const [orders, setOrders] = useState<IOrderManagement[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<IOrderManagement[]>([]);

  useEffect(() => {
    if (token) {
      getOrdersAPI(token)
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  useEffect(() => {
    if (orders.length !== 0) {
      setFilteredOrders(orders);
    }
  }, [orders]);

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
          <OrdersList orders={filteredOrders} />
        </div>
      </AdminLayout>
    </AdminProtectedPage>
  );
};

export default AdminOrdersPage;
