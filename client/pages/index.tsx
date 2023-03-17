import CategoryBanner from "@/components/website/home/category-banner";
import FeaturedProducts from "@/components/website/home/featured-products";
import MainLayout from "@/components/website/layout/main-layout";
import { getFeaturedProductsAPI } from "@/lib/products-api";
import { IProducts } from "@/types/products-type";
import { GetStaticProps } from "next";
import React from "react";

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {
  const resFeatured = await getFeaturedProductsAPI();
  const featuredProducts: IProducts[] = resFeatured.data;

  return {
    props: { featuredProducts },
    revalidate: 60,
  };
};

// PROPS
interface Props {
  featuredProducts: IProducts[];
}

const Home: React.FC<Props> = ({ featuredProducts }) => {
  return (
    <MainLayout>
      <CategoryBanner />
      <FeaturedProducts featuredProducts={featuredProducts} />
    </MainLayout>
  );
};

export default Home;
