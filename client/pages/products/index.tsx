import MainLayout from "@/components/website/layout/main-layout";
import ProductFilter from "@/components/website/products/filter";
import React from "react";

const ProductsPage = () => {
  return (
    <MainLayout title="Products">
      <div className="flex justify-center">
        <div className="container py-6 md:py-8">
          <div className="flex">
            <ProductFilter />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
