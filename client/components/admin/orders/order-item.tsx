import OrderDetails from "@/components/website/user/order-detail";
import { IOrderManagement } from "@/types/admin-type";
import formatDate from "@/utils/format-date";
import React, { useState } from "react";
import { AiFillCheckCircle, AiFillEye } from "react-icons/ai";

interface Props {
  order: IOrderManagement;
}

const OrderItem: React.FC<Props> = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OrderDetails isOpen={isOpen} setIsOpen={setIsOpen} order={order} />
      <tr>
        <td className="border border-slate-200 px-6 py-3">#{order._id}</td>
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
            <AiFillEye
              className="w-10 h-10 text-lightBlue"
              onClick={() => setIsOpen(true)}
            />

            <AiFillCheckCircle className="w-8 h-8 text-green-600 cursor-pointer" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrderItem;
