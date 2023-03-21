import { IOrderManagement } from "@/types/admin-type";
import React from "react";
import OrderItem from "./order-item";

interface Props {
  orders: IOrderManagement[];
}

const OrdersList: React.FC<Props> = ({ orders }) => {
  return (
    <div className="w-full mt-2 overflow-x-auto xl:overflow-x-visible">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Order ID
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Customer Name
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Date
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Status
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Total Amount
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
