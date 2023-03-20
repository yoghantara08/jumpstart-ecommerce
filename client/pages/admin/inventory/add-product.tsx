import InventoryAddProduct from "@/components/admin/inventory/add-product";
import AdminLayout from "@/components/admin/layout/main-layout";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";
import React from "react";

const AddProductPage = () => {
  return (
    <AdminProtectedPage>
      <AdminLayout title="Add Product">
        <InventoryAddProduct />
      </AdminLayout>{" "}
    </AdminProtectedPage>
  );
};

export default AddProductPage;
