import MainLayout from "@/components/website/layout/main-layout";
import ProductFilter from "@/components/website/products/filter";
import ProductCard from "@/components/website/products/product-card";
import React from "react";

const ProductsPage = () => {
  return (
    <MainLayout title="Products">
      <div className="flex justify-center">
        <div className="container py-6 md:py-8 px-4 md:px-6">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <ProductFilter />
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
