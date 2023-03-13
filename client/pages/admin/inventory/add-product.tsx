import InventoryAddProduct from "@/components/admin/inventory/add-product";
import AdminLayout from "@/components/admin/layout/main-layout";
import React from "react";

const AddProductPage = () => {
  return (
    <AdminLayout title="Add Product">
      <InventoryAddProduct />
    </AdminLayout>
  );
};

export default AddProductPage;
