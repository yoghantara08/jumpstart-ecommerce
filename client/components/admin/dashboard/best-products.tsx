import React from "react";

const DashboardBestProducts = () => {
  return (
    <div className="bg-light mt-5 rounded-lg py-4 px-6 shadow-sm">
      <h3 className="font-medium text-lg">Top Selling Products</h3>
      <div className="relative overflow-x-auto mt-2">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100 text-left">
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Product ID
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Product Name
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Price
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Quantity
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-6 py-2">#1231</td>
              <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Headset Pro Cool 5.3 Audio 7.0
              </td>
              <td className="border border-slate-200 px-6 py-2">$299.99</td>
              <td className="border border-slate-200 px-6 py-2">24</td>
              <td className="border border-slate-200 px-6 py-2">$7,199.76</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardBestProducts;
