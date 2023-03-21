import AdminLayout from "@/components/admin/layout/main-layout";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";
import UserSettingsImage from "@/components/website/user/settings-image";
import UserSettingsProfile from "@/components/website/user/settings-profile";

const AdminSettings = () => {
  return (
    <AdminProtectedPage>
      <AdminLayout title="Admin Settings">
        <div className="px-5 py-4 rounded-lg border border-gray-300 shadow bg-light">
          <UserSettingsImage />
          <UserSettingsProfile />
        </div>
      </AdminLayout>
    </AdminProtectedPage>
  );
};

export default AdminSettings;
