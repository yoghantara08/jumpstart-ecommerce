import InventoryEditProduct from "@/components/admin/inventory/edit-product";
import AdminLayout from "@/components/admin/layout/main-layout";

const EditProduct = () => {
  return (
    <AdminLayout title="Edit Product">
      <InventoryEditProduct />
    </AdminLayout>
  );
};

export default EditProduct;
