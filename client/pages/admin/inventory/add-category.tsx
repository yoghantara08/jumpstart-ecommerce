import InventoryAddCategory from "@/components/admin/inventory/add-category";
import React from "react";
import AdminLayout from "@/components/admin/layout/main-layout";

const AddCategoryPage = () => {
  return (
    <AdminLayout title="Add Category">
      <InventoryAddCategory />
    </AdminLayout>
  );
};

export default AddCategoryPage;
