import InventoryAddCategory from "@/components/admin/inventory/add-category";
import React from "react";
import AdminLayout from "@/components/admin/layout/main-layout";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";

const AddCategoryPage = () => {
  return (
    <AdminProtectedPage>
      <AdminLayout title="Add Category">
        <InventoryAddCategory />
      </AdminLayout>{" "}
    </AdminProtectedPage>
  );
};

export default AddCategoryPage;
