import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/layout/container";
import OrdersFilter from "@/components/website/user/orders-filter";
import OrdersHistory from "@/components/website/user/orders-history";
import React, { useState, useEffect } from "react";
import { orderFilters } from "@/utils/orders-filter";
import AuthenticatedPage from "@/components/website/hoc/authenticated";
import { IOrder } from "@/types/products-type";
import { getOrderHistoryAPI } from "@/lib/user-api";
import { useAuth } from "@/contexts/auth-context";

const UserOrdersPage = () => {
  const [filterOrder, setFilterOrder] = useState<string>("ALL");
  const [orders, setOrders] = useState<IOrder[] | null>();
  const [filteredOrders, setFilteredOrders] = useState<IOrder[]>();
  const { token, user } = useAuth();

  useEffect(() => {
    getOrderHistoryAPI(token, user._id)
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, user._id]);

  useEffect(() => {
    if (orders)
      switch (filterOrder) {
        case "ALL":
          setFilteredOrders(orders);
          break;
        case "PROCESSED":
          setFilteredOrders(
            orders?.filter((item) => item.status === "PROCESSED")
          );
          break;
        case "COMPLETED":
          setFilteredOrders(
            orders?.filter((item) => item.status === "COMPLETED")
          );
          break;
        case "CANCELLED":
          setFilteredOrders(
            orders?.filter((item) => item.status === "CANCELLED")
          );
          break;
      }
  }, [filterOrder, orders]);

  return (
    <AuthenticatedPage>
      <MainLayout title="Order History">
        <UserContainer>
          <h2 className="text-xl md:text-2xl font-medium">Order History</h2>
          <OrdersFilter
            filterItems={orderFilters}
            filter={filterOrder}
            setFilter={setFilterOrder}
          />
          {filteredOrders ? (
            filteredOrders.map((order) => (
              <OrdersHistory key={order._id} order={order} />
            ))
          ) : (
            <p>No order yet</p>
          )}
        </UserContainer>
      </MainLayout>
    </AuthenticatedPage>
  );
};

export default UserOrdersPage;
