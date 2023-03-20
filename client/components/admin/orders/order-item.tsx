import OrderDetails from "@/components/website/user/order-detail";
import { useAuth } from "@/contexts/auth-context";
import { cancelOrderAPI, completeOrderAPI } from "@/lib/admin-api";
import { IOrderManagement } from "@/types/admin-type";
import formatDate from "@/utils/format-date";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle, AiFillEye } from "react-icons/ai";

interface Props {
  order: IOrderManagement;
}

const OrderItem: React.FC<Props> = ({ order }) => {
  const { token } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    switch (order.status) {
      case "COMPLETED":
        setStatusColor("text-green-500");
        break;
      case "PROCESSED":
        setStatusColor("text-yellow-600");
        break;
      case "CANCELLED":
        setStatusColor("text-red-500");
        break;
    }
  }, [order.status]);

  const completeHandler = async (orderId: string) => {
    try {
      const accept = confirm(
        `You sure want to complete the order with ID: ${orderId}?`
      );
      if (accept) {
        await completeOrderAPI(token, orderId);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancelHandler = async (orderId: string) => {
    try {
      const accept = confirm(
        `You sure want to cancel the order with ID: ${orderId}?`
      );
      if (accept) {
        await cancelOrderAPI(token, orderId);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <tr>
          <td colSpan={6}>
            <OrderDetails isOpen={isOpen} setIsOpen={setIsOpen} order={order} />
          </td>
        </tr>
      )}
      <tr>
        <td className="border border-slate-200 px-6 py-3">#{order._id}</td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {order.userId.profile.firstName} {order.userId.profile.lastName}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {formatDate(order.createdAt)}
        </td>
        <td
          className={`${statusColor} border border-slate-200 px-6 py- whitespace-nowrap`}
        >
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

            <AiFillCheckCircle
              className="w-8 h-8 text-green-600 cursor-pointer"
              onClick={async () => await completeHandler(order._id)}
            />
            <button onClick={async () => await cancelHandler(order._id)}>
              cancel
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrderItem;
