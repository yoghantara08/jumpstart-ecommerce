import { MdDelete, MdEdit } from "react-icons/md";

const CustomersList = () => {
  return (
    <div className="relative overflow-x-auto mt-3">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Customer ID
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Name
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Email
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Registered
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Total Orders
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Provider ID
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
              alex@gmail.com
            </td>
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              12 March 2023
            </td>
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              21
            </td>
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              Google
            </td>
            <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
              <div className="flex gap-3">
                <MdEdit className="w-6 h-6 text-green-600 cursor-pointer" />
                <MdDelete className="w-6 h-6 text-red-600 cursor-pointer" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
