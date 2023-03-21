import OrderDetails from "@/components/website/user/order-detail";
import { useAuth } from "@/contexts/auth-context";
import { cancelOrderAPI, completeOrderAPI } from "@/lib/admin-api";
import { IOrderManagement } from "@/types/admin-type";
import formatDate from "@/utils/format-date";
import { Menu } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

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
        setStatusColor("bg-green-200 text-green-600 py-2 px-3 rounded ");
        break;
      case "PROCESSED":
        setStatusColor("bg-yellow-300 text-yellow-700 py-2 px-3 rounded ");
        break;
      case "CANCELLED":
        setStatusColor("bg-red-200 text-red-600 py-2 px-3 rounded ");
        break;
    }
  }, [order.status]);

  const completeHandler = async () => {
    try {
      const accept = confirm(
        `You sure want to complete the order with ID: ${order._id}?`
      );
      if (accept) {
        await completeOrderAPI(token, order._id);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancelHandler = async () => {
    try {
      const accept = confirm(
        `You sure want to cancel the order with ID: ${order._id}?`
      );
      if (accept) {
        await cancelOrderAPI(token, order._id);
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
        <td className="w-72 border border-slate-200 px-6 py-3">#{order._id}</td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {order.userId.profile.firstName} {order.userId.profile.lastName}
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          {formatDate(order.createdAt)}
        </td>
        <td className="border border-slate-200 px-6 py- whitespace-nowrap">
          <span className={statusColor}>{order.status}</span>
        </td>
        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
          ${order.totalPrice}
        </td>

        <td className="border border-slate-200 px-6 py-3 whitespace-nowrap relative">
          <Menu>
            <div className="relative">
              <Menu.Button>
                <BsThreeDots className="text-xl" />
              </Menu.Button>
              <Menu.Items className="absolute z-20 bg-white py-1 mt-1 shadow rounded right-0 w-36">
                <Menu.Item>
                  <p
                    className="hover:bg-gray-200 px-3 py-1 cursor-pointer text-lightBlue"
                    onClick={() => setIsOpen(true)}
                  >
                    Show
                  </p>
                </Menu.Item>
                {order.status === "PROCESSED" && (
                  <>
                    <Menu.Item>
                      <p
                        className="hover:bg-gray-200 px-3 py-1 cursor-pointer text-green-500"
                        onClick={completeHandler}
                      >
                        Complete Order
                      </p>
                    </Menu.Item>
                    <Menu.Item>
                      <p
                        className="hover:bg-gray-200 px-3 py-1 cursor-pointer text-red-500"
                        onClick={cancelHandler}
                      >
                        Cancel Order
                      </p>
                    </Menu.Item>
                  </>
                )}
              </Menu.Items>
            </div>
          </Menu>
        </td>
      </tr>
    </>
  );
};

export default OrderItem;
