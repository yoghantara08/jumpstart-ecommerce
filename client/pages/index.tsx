import CategoryBanner from "@/components/website/home/category-banner";
import FeaturedProducts from "@/components/website/home/featured-products";
import MainLayout from "@/components/website/layout/main-layout";

const Home = () => {
  return (
    <MainLayout>
      <CategoryBanner />
      <FeaturedProducts />
    </MainLayout>
  );
};

export default Home;
