import { IMAGE_URL } from "@/lib/config";
import { IOrderManagement } from "@/types/admin-type";
import { IOrder } from "@/types/products-type";
import formatDate from "@/utils/format-date";
import { Dialog } from "@headlessui/react";
import React from "react";
import { BiX } from "react-icons/bi";

interface Props {
  order: IOrder | IOrderManagement;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderDetails: React.FC<Props> = ({ isOpen, order, setIsOpen }) => {
  const closeHandler = () => {
    setIsOpen(false);
  };

  const date = formatDate(order.createdAt);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      as="div"
      className="relative z-50"
    >
      <Dialog.Overlay className="fixed inset-5 bg-black opacity-30 top-0 left-0 w-full h-full" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white shadow">
          <Dialog.Title className="border-b px-5 py-3 flex justify-between items-center gap-3 text-slate-700">
            <span className="font-montserrat font-medium">Order Details</span>
            <BiX className="text-2xl cursor-pointer" onClick={closeHandler} />
          </Dialog.Title>
          <div className="px-5 py-3">
            <p>
              Order Id: <span className="text-yellow-600">#{order._id}</span>
            </p>
            <p>Date: {date}</p>
            <div className="grid grid-cols-4 border-b mt-1 py-2">
              <h4>Product</h4>
              <h4 className="col-span-2">Product Name</h4>
              <h4>Price</h4>
            </div>
            {order.items.map((item) => (
              <div
                className="grid grid-cols-4 border-b py-2"
                key={item.product._id}
              >
                <picture className="w-14 h-12 flex overflow-hidden">
                  <img
                    src={`${IMAGE_URL}/${item.product.image}`}
                    alt={item.product.name}
                    className="w-full h-full"
                  />
                </picture>
                <div className="col-span-2">
                  <p>{item.product.name}</p>
                  <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                </div>
                <p>${item.price}</p>
              </div>
            ))}
            <div className="grid grid-cols-4 border-b py-3">
              <p className="col-span-3">Total: </p>
              <p>${order.totalPrice}</p>
            </div>
          </div>

          <div className="flex justify-end pb-4 pt-1 px-5">
            <button
              className="rounded bg-slate-500 text-white px-5 py-2 font-medium"
              onClick={closeHandler}
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default OrderDetails;
