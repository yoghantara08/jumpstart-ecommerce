import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const ProductCard: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/products/slug">
      <div
        className={`${className} w-full rounded-xl overflow-hidden shadow bg-white font-montserrat`}
      >
        <div className="h-36 sm:h-44 object-cover">
          <Image
            src="/shoes1.jpg"
            alt="product"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="py-2 px-3">
          <div className="text-sm text-blue-400 space-x-3">
            <span>Sports</span>
            <span>Best Sales</span>
          </div>
          <p className="font-medium">Nike Shoes 2023 - Brand New</p>
          <p className="font-bold mb-2">$ 192,55</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
