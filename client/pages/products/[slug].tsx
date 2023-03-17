import MainLayout from "@/components/website/layout/main-layout";
import ProductDetail from "@/components/website/products/product-detail";
import ProductImage from "@/components/website/products/product-image";
import ProductOrder from "@/components/website/products/product-order";
import { getProductDetailsAPI, getProductsAPI } from "@/lib/products-api";
import { IProducts } from "@/types/products-type";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

// GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getProductsAPI();
  const products: IProducts[] = res.data;

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let slug: any;
  if (params) {
    slug = params.slug;
  }
  const res = await getProductDetailsAPI(slug);
  const product = res.data;

  return {
    props: { product },
  };
};

interface Props {
  product: IProducts;
}

const ProductDetailsPage: React.FC<Props> = ({ product }) => {
  console.log(product);

  return (
    <MainLayout title={product.name}>
      <div className="flex justify-center py-6 sm:py-8 px-4">
        <div className="container grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <ProductImage product={product} />
          <ProductDetail product={product} />
          <ProductOrder product={product} />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetailsPage;
