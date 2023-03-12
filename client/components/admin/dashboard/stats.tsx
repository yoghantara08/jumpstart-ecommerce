import React from "react";

const stats = [
  { name: "Revenue", amount: "$12,052" },
  { name: "Customers", amount: "540" },
  { name: "Total Order", amount: "765" },
  { name: "Visits", amount: "6502" },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="text-2xl font-medium py-4 px-6 shadow-sm rounded-lg bg-light"
        >
          <p>{stat.name}</p>
          <p className="text-lightBlue">{stat.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
