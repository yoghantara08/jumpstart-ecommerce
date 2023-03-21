import { useAuth } from "@/contexts/auth-context";
import { getStatsAPI } from "@/lib/admin-api";
import { IStats } from "@/types/admin-type";
import React, { useEffect, useState } from "react";

const DashboardStats = () => {
  const { token } = useAuth();
  const [stats, setStats] = useState<IStats[]>([]);

  useEffect(() => {
    if (token) {
      getStatsAPI(token)
        .then((res) => {
          const revenue = { name: "Revenue", amount: `$ ${res.data.revenue}` };
          const customers = { name: "Customers", amount: res.data.customers };
          const totalOrder = {
            name: "Total Order",
            amount: res.data.totalOrder,
          };
          const visitor = { name: "Visitor", amount: 0 };
          setStats([revenue, customers, totalOrder, visitor]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-5">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="text-2xl font-medium py-4 px-6 shadow-sm rounded-lg bg-light"
        >
          <p className="">{stat.name}</p>
          <p className="text-lightBlue">{stat.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
