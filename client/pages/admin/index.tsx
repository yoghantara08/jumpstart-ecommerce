import DashboardBestProducts from "@/components/admin/dashboard/best-products";
import DashboardStats from "@/components/admin/dashboard/stats";
import AdminLayout from "@/components/admin/layout/main-layout";
import React from "react";

const AdminDashboard = () => {
  return (
    <AdminLayout title="Admin Dashboard">
      <DashboardStats />
      <DashboardBestProducts />
    </AdminLayout>
  );
};

export default AdminDashboard;
