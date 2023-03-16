import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/layout/container";
import OrdersFilter from "@/components/website/user/orders-filter";
import OrdersHistory from "@/components/website/user/orders-history";
import React, { useState } from "react";
import { orderFilters } from "@/utils/orders-filter";
import AuthenticatedPage from "@/components/website/hoc/authenticated";

const orders = [
  {
    orderId: "21",
    date: "12 March 2023",
    orderStatus: "COMPLETED",
    total: "250,44",
    items: [
      {
        name: "Sport Shoes Nike1",
        amount: 2,
        price: "125,22",
        image: "/shoes1.jpg",
      },
      {
        name: "Sport Shoes Nike2",
        amount: 2,
        price: "125,22",
        image: "/shoes1.jpg",
      },
    ],
  },
  {
    orderId: "19",
    date: "5 March 2023",
    orderStatus: "PROCCESSED",
    total: "250,44",
    items: [
      {
        name: "Sport Shoes Nike3",
        amount: 2,
        price: "125,22",
        image: "/shoes1.jpg",
      },
      {
        name: "Sport Shoes Nike4",
        amount: 2,
        price: "125,22",
        image: "/shoes1.jpg",
      },
    ],
  },
];

const UserOrdersPage = () => {
  const [filterOrder, setFilterOrder] = useState<string>("ALL");

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
          {orders.map((order) => (
            <OrdersHistory
              key={order.orderId}
              orderId={order.orderId}
              date={order.date}
              orderStatus={order.orderStatus}
              total={order.total}
              items={order.items}
            />
          ))}
        </UserContainer>
      </MainLayout>
    </AuthenticatedPage>
  );
};

export default UserOrdersPage;
