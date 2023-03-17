import { IProducts } from "@/types/products-type";
import React from "react";
import ProductCard from "../products/product-card";

const FeaturedProducts: React.FC<{ featuredProducts: IProducts[] }> = ({
  featuredProducts,
}) => {
  return (
    <section className="flex justify-center bg-light py-5">
      <div className="container py-5 px-4">
        <header className="flex flex-col justify-center space-y-1">
          <h2 className="text-2xl uppercase font-bold">Featured Products</h2>
          <p className="font-montserrat">
            Discover Our Best-Selling Items and Get Yours Today!
          </p>
        </header>
        <div className="mt-3 grid grid-cols-2 gap-5 sm:flex sm:justify-between sm:overflow-x-auto pb-4 ">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              className="sm:w-56"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
