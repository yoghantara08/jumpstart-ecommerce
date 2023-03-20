import React from "react";
import Link from "next/link";
import { AiFillCheckCircle, AiFillEye } from "react-icons/ai";
import { IOrderManagement } from "@/types/admin-type";
import formatDate from "@/utils/format-date";

interface Props {
  orders: IOrderManagement[];
}

const OrdersList: React.FC<Props> = ({ orders }) => {
  return (
    <div className="relative overflow-x-auto mt-2">
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
            <tr key={order._id}>
              <td className="border border-slate-200 px-6 py-3">
                #{order._id}
              </td>
              <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
                {order.userId.profile.firstName} {order.userId.profile.lastName}
              </td>
              <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
                {formatDate(order.createdAt)}
              </td>
              <td className="border border-slate-200 px-6 py-3 text-green-400 whitespace-nowrap">
                {order.status}
              </td>
              <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
                ${order.totalPrice}
              </td>

              <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Link href="/admin/orders/orderId">
                    <AiFillEye className="w-10 h-10 text-lightBlue" />
                  </Link>
                  <AiFillCheckCircle className="w-8 h-8 text-green-600 cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
