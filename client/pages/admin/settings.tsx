import AdminLayout from "@/components/admin/layout/main-layout";
import AdminSettingsImage from "@/components/admin/settings/settings-image";
import AdminSettingsProfile from "@/components/admin/settings/settings-profile";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";
import React from "react";

const AdminSettings = () => {
  return (
    <AdminProtectedPage>
      <AdminLayout title="Admin Settings">
        <div className="px-5 py-4 rounded-lg border border-gray-300 shadow bg-light">
          <AdminSettingsImage />
          <AdminSettingsProfile />
        </div>
      </AdminLayout>{" "}
    </AdminProtectedPage>
  );
};

export default AdminSettings;
