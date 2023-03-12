import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  orderId: string;
  date: string;
  orderStatus: string;
  total: string;
  items: {
    name: string;
    amount: number;
    price: string;
    image: string;
  }[];
}

const OrdersHistory: React.FC<Props> = ({
  orderId,
  date,
  orderStatus,
  total,
  items,
}) => {
  let statusColor;

  switch (orderStatus) {
    case "COMPLETED":
      statusColor = "text-green-500";
      break;
    case "PROCCESSED":
      statusColor = "text-yellow-600";
      break;
    case "CANCELLED":
      statusColor = "text-red-500";
      break;
  }

  return (
    <div className="py-4 px-5 rounded border border-gray-400 mb-4">
      <div className="flex flex-col md:flex-row md:gap-3 font-medium font-montserrat">
        <span>Order</span>
        <Link
          href={`/orders/userId/${orderId}`}
          className="text-yellow-600 hover:underline"
        >
          #{orderId}
        </Link>
        <span>{date}</span>
        <span className={statusColor}>{orderStatus}</span>
      </div>
      <div className="w-full flex flex-col mt-3 gap-3">
        {items.map((item) => (
          <div key={item.name} className="flex gap-3">
            <div className="w-16 h-14">
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={150}
                className="w-full h-full rounded"
              />
            </div>
            <div className="md:text-lg">
              <p>{item.name}</p>
              <p className="font-medium">
                {item.amount} x ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 items-center justify-between mt-3">
        <div className="md:text-lg">
          <p>Total Amount</p>
          <p className="font-medium">${total}</p>
        </div>
        <Link
          href={`/orders/userId/${orderId}`}
          className="block button-primary py-2"
        >
          Order Details
        </Link>
      </div>
    </div>
  );
};

export default OrdersHistory;
