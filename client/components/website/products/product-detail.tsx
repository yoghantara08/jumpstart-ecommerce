import { IProducts } from "@/types/products-type";
import Link from "next/link";
import React from "react";

interface Props {
  product: IProducts;
}
const ProductDetail: React.FC<Props> = ({ product }) => {
  return (
    <div className="w-full font-montserrat order-3 md:order-2">
      <div className="border-b pb-3">
        <h2 className="text-xl md:text-2xl font-semibold mb-1">
          {product.name}
        </h2>
        <p className="text-2xl md:text-3xl font-bold">$ {product.price}</p>
      </div>
      <div className="border-b py-3 text-sm md:text-base">
        <h4 className="md:text-lg font-semibold">Details</h4>
        <div>
          <span className="text-gray-500">Condition: </span>
          <span className="font-medium">{product.condition}</span>
        </div>
        <div>
          <span className="text-gray-500">Weight: </span>
          <span className="font-medium">{product.weight} kg</span>
        </div>
        <div>
          <span className="text-gray-500">Category: </span>
          <Link
            href={`/products?category=${product.category}`}
            className="font-medium text-blue-500 hover:text-blue-700"
          >
            {product.category}
          </Link>
        </div>
      </div>
      <p className="py-3 text-gray-500 text-sm md:text-base">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDetail;
