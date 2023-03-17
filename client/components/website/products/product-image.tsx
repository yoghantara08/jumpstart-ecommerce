import { IMAGE_URL } from "@/lib/config";
import { IProducts } from "@/types/products-type";
import Image from "next/image";
import React from "react";

interface Props {
  product: IProducts;
}
const ProductImage: React.FC<Props> = ({ product }) => {
  return (
    <div className="grid md:justify-end h-fit order-1">
      <div className="w-full h-full max-w-sm max-h-96 overflow-hidden shadow-sm">
        <Image
          src={`${IMAGE_URL}/${product.image}`}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductImage;
