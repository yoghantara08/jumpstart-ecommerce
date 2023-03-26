import MainLayout from "@/components/website/layout/main-layout";
import ProductFilter from "@/components/website/products/filter";
import ProductCard from "@/components/website/products/product-card";
import { getProductsAPI } from "@/lib/products-api";
import { IProducts } from "@/types/products-type";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
  const { query } = useRouter();
  const [filteredProducts, setFilteredProducts] =
    useState<IProducts[]>(products);

  useEffect(() => {
    let filteredProducts = [...products];

    if (query.q) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes((query.q as string).toLowerCase())
      );
    }

    if (query.category) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category.toLowerCase() ===
          (query.category as string).toLowerCase()
      );
    }

    if (query.min) {
      filteredProducts = filteredProducts.filter(
        (product) => Number(product.price) >= Number(query.min)
      );
    }

    if (query.max) {
      filteredProducts = filteredProducts.filter(
        (product) => Number(product.price) <= Number(query.max)
      );
    }

    setFilteredProducts(filteredProducts);
  }, [products, query]);

  return (
    <MainLayout title="Products">
      <div className="flex justify-center">
        <div className="container py-6 md:py-8 px-4 md:px-6">
          <div className="flex flex-wrap md:flex-nowrap gap-5">
            <ProductFilter />
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
              {filteredProducts.map((product) => (
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
