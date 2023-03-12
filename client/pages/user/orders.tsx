import MainLayout from "@/components/website/layout/main-layout";
import UserContainer from "@/components/website/user/container";
import OrdersFilter from "@/components/website/user/orders-filter";
import OrdersHistory from "@/components/website/user/orders-history";
import React, { useState } from "react";

const orders = [
  {
    orderId: "21",
    date: "12 March 2023",
    orderStatus: "COMPLETED",
    total: "250,44",
    items: [
      {
        name: "Sport Shoes Nike",
        amount: 2,
        price: "125,22",
        image: "/shoes1.jpg",
      },
      {
        name: "Sport Shoes Nike",
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
        name: "Sport Shoes Nike",
        amount: 2,
        price: "125,22",
        image: "/shoes1.jpg",
      },
      {
        name: "Sport Shoes Nike",
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
    <MainLayout title="Order History">
      <UserContainer>
        <h2 className="text-xl md:text-2xl font-medium">Order History</h2>
        <OrdersFilter filter={filterOrder} setFilter={setFilterOrder} />
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
  );
};

export default UserOrdersPage;
