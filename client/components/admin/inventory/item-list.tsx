import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const InventoryList = () => {
  return (
    <div className="relative overflow-x-auto mt-3">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Product ID
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Product Image
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Product Name
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Category
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Quantity
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Price
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              View Details
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 px-6 py-2">#1231</td>
            <td className="border border-slate-200 px-6 py-2 whitespace-nowrap ">
              <div className="w-24 h-20">
                <Image
                  src="/shoes1.jpg"
                  alt="product"
                  width={250}
                  height={250}
                  className="w-full h-full"
                />
              </div>
            </td>
            <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Shoes
            </td>
            <td className="border border-slate-200 px-6 py-2 text-lightBlue whitespace-nowrap">
              Sports
            </td>
            <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              12
            </td>
            <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              $129
            </td>
            <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              <Link
                href="/admin/orders/orderId"
                className="px-4 py-2 rounded bg-lightBlue text-white"
              >
                View Details
              </Link>
            </td>
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              <div className="flex gap-3">
                <MdEdit className="w-6 h-6 text-green-600" />
                <MdDelete className="w-6 h-6 text-red-600" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
