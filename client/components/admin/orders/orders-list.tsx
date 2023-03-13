import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";

const OrdersList = () => {
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
              View Details
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 px-6 py-3">#1231</td>
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              Alex Sulivan
            </td>
            <td className="border border-slate-200 px-6 py-3">
              24 January 2023
            </td>
            <td className="border border-slate-200 px-6 py-3 text-green-400">
              COMPLETED
            </td>
            <td className="border border-slate-200 px-6 py-3">$7,199.76</td>
            <td className="border border-slate-200 px-6 py-3">
              <Link
                href="/admin/orders/orderId"
                className="px-4 py-2 rounded bg-lightBlue text-white"
              >
                View Details
              </Link>
            </td>
            <td className="border border-slate-200 px-6 py-3">
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

export default OrdersList;
