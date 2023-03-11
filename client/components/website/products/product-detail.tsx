import Link from "next/link";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="w-full font-montserrat order-3 md:order-2">
      <div className="border-b pb-3">
        <h2 className="text-xl md:text-2xl font-semibold mb-1">
          Nike Shoes 2023 - Brand New
        </h2>
        <p className="text-2xl md:text-3xl font-bold">$ 191,24</p>
      </div>
      <div className="border-b py-3 text-sm md:text-base">
        <h4 className="md:text-lg font-semibold">Details</h4>
        <div>
          <span className="text-gray-500">Condition: </span>
          <span className="font-medium">New</span>
        </div>
        <div>
          <span className="text-gray-500">Weight: </span>
          <span className="font-medium">0,56 kg</span>
        </div>
        <div>
          <span className="text-gray-500">Category: </span>
          <Link
            href="/products?category=electronics"
            className="font-medium text-blue-500 hover:text-blue-700"
          >
            Electronics
          </Link>
        </div>
      </div>
      <p className="py-3 text-gray-500 text-sm md:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        officiis, culpa quo omnis voluptate maxime praesentium hic eveniet
        reprehenderit nobis non quasi dolorem. Ad nemo, maxime cumque alias
        saepe quisquam?
      </p>
    </div>
  );
};

export default ProductDetail;
