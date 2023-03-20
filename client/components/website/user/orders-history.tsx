import { IMAGE_URL } from "@/lib/config";
import { IOrder } from "@/types/products-type";
import formatDate from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import OrderDetails from "./order-detail";

interface Props {
  order: IOrder;
}

const OrdersHistory: React.FC<Props> = ({ order }) => {
  const [statusColor, setStatusColor] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const date = formatDate(order.createdAt);

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
    console.log(order.status);
  }, [order.status]);

  return (
    <>
      <OrderDetails isOpen={isOpen} order={order} setIsOpen={setIsOpen} />
      <div className="py-4 px-5 rounded border border-gray-400 mb-4">
        <div className="flex flex-col md:flex-row md:gap-3 font-medium font-montserrat">
          <span>Order</span>
          <Link
            href={`/user/orders/${order._id}`}
            className="text-yellow-600 hover:underline"
          >
            #{order._id}
          </Link>
          <span>{date}</span>
          <span className={statusColor}>{order.status}</span>
        </div>
        <div className="w-full flex flex-col mt-3 gap-3">
          {order.items.map((item) => (
            <div key={item.product._id} className="flex gap-3">
              <div className="w-16 h-14">
                <Image
                  src={`${IMAGE_URL}/${item.product.image}`}
                  alt={item.product.name}
                  width={150}
                  height={150}
                  className="w-full h-full rounded"
                />
              </div>
              <div className="md:text-lg">
                <p>{item.product.name}</p>
                <p className="font-medium">
                  {item.quantity} x ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 items-center justify-between mt-3">
          <div className="md:text-lg">
            <p>Total Amount</p>
            <p className="font-medium">${order.totalPrice}</p>
          </div>
          <button
            className="button-primary py-2"
            onClick={() => setIsOpen(true)}
          >
            Order Details
          </button>
        </div>
      </div>
    </>
  );
};

export default OrdersHistory;
