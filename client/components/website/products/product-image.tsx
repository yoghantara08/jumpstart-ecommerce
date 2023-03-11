import Image from "next/image";
import React from "react";

const ProductImage = () => {
  return (
    <div className="grid md:justify-end h-fit order-1">
      <div className="w-full h-full max-w-sm max-h-96">
        <Image
          src="/shoes1.jpg"
          alt="slug"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductImage;
