import AdminLayout from "@/components/admin/layout/main-layout";
import AdminSettingsImage from "@/components/admin/settings/settings-image";
import AdminSettingsProfile from "@/components/admin/settings/settings-profile";
import React from "react";

const AdminSettings = () => {
  return (
    <AdminLayout title="Admin Settings">
      <div className="px-5 py-4 rounded-lg border border-gray-300 shadow bg-light">
        <AdminSettingsImage />
        <AdminSettingsProfile />
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
