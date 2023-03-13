import Link from "next/link";
import { AiFillCheckCircle, AiFillEye } from "react-icons/ai";

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
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              24 January 2023
            </td>
            <td className="border border-slate-200 px-6 py-3 text-green-400 whitespace-nowrap">
              COMPLETED
            </td>
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              $7,199.76
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
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
