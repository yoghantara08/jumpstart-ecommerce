import { IMAGE_URL } from "@/lib/config";
import { IProducts } from "@/types/products-type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  product: IProducts;
}

const ProductCard: React.FC<Props> = ({ className, product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div
        className={`${className} w-full rounded-xl overflow-hidden shadow bg-white font-montserrat`}
      >
        <div className="h-36 sm:h-44 object-cover border-b">
          <Image
            src={`${IMAGE_URL}/${product.image}`}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="py-2 px-3">
          <div className="text-sm text-blue-400 space-x-3">
            <span>{product.category}</span>
            <span>Best Sales</span>
          </div>
          <p className="font-medium">{product.name}</p>
          <p className="font-bold mb-2">$ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
