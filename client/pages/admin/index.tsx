import DashboardBestProducts from "@/components/admin/dashboard/best-products";
import DashboardStats from "@/components/admin/dashboard/stats";
import AdminLayout from "@/components/admin/layout/main-layout";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";
import React from "react";

const AdminDashboard = () => {
  return (
    <AdminProtectedPage>
      <AdminLayout title="Admin Dashboard">
        <DashboardStats />
        <DashboardBestProducts />
      </AdminLayout>
    </AdminProtectedPage>
  );
};

export default AdminDashboard;
