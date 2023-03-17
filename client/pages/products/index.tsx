import MainLayout from "@/components/website/layout/main-layout";
import ProductFilter from "@/components/website/products/filter";
import ProductCard from "@/components/website/products/product-card";
import { getProductsAPI } from "@/lib/products-api";
import { IProducts } from "@/types/products-type";
import { GetStaticProps } from "next";
import React from "react";

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const res = await getProductsAPI();
  const products: IProducts[] = res.data;

  return {
    props: { products },
    revalidate: 60,
  };
};

// PROPS
interface Props {
  products: IProducts[];
}

const ProductsPage: React.FC<Props> = ({ products }) => {
  return (
    <MainLayout title="Products">
      <div className="flex justify-center">
        <div className="container py-6 md:py-8 px-4 md:px-6">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <ProductFilter />
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
