import MainLayout from "@/components/website/layout/main-layout";
import ProductDetail from "@/components/website/products/product-detail";
import ProductImage from "@/components/website/products/product-image";
import ProductOrder from "@/components/website/products/product-order";

const ProductDetailsPage = () => {
  return (
    <MainLayout title="">
      <div className="flex justify-center py-6 sm:py-8 px-4">
        <div className="container grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <ProductImage />
          <ProductDetail />
          <ProductOrder />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailsPage;
