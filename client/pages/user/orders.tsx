import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/user/container";
import OrdersFilter from "@/components/website/user/orders-filter";
import OrdersItem from "@/components/website/user/orders-item";
import React, { useState } from "react";

const UserOrdersPage = () => {
  const [filterOrder, setFilterOrder] = useState<string>("ALL");

  return (
    <MainLayout title="Orders">
      <UserContainer>
        <h2 className="text-xl md:text-2xl font-medium">Order History</h2>
        <OrdersFilter filter={filterOrder} setFilter={setFilterOrder} />
        <OrdersItem />
      </UserContainer>
    </MainLayout>
  );
};

export default UserOrdersPage;
