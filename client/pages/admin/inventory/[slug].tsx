import InventoryEditProduct from "@/components/admin/inventory/edit-product";
import AdminLayout from "@/components/admin/layout/main-layout";
import AdminProtectedPage from "@/components/website/hoc/admin-protected-page";

const EditProduct = () => {
  return (
    <AdminProtectedPage>
      <AdminLayout title="Edit Product">
        <InventoryEditProduct />
      </AdminLayout>
    </AdminProtectedPage>
  );
};

export default EditProduct;
