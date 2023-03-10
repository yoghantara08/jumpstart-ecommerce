import ProductCard from "../products/product-card";

const FeaturedProducts = () => {
  return (
    <section className="flex justify-center bg-light py-5">
      <div className="container py-5 px-4">
        <header className="flex flex-col justify-center space-y-1">
          <h2 className="text-2xl uppercase font-bold">Featured Products</h2>
          <p>Discover Our Best-Selling Items and Get Yours Today!</p>
        </header>
        <div className="mt-3 grid grid-cols-2 gap-5 sm:flex sm:justify-between sm:overflow-x-auto pb-4 ">
          <ProductCard className="sm:w-56" />
          <ProductCard className="sm:w-56" />
          <ProductCard className="sm:w-56" />
          <ProductCard className="sm:w-56" />
          <ProductCard className="sm:w-56" />
          <ProductCard className="sm:w-56" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
