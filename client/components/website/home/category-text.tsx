import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  title: string;
  itemCount: number;
  path: string;
}

const CategoryText: React.FC<Props> = ({ title, itemCount, path }) => {
  return (
    <div className="relative z-20">
      <p className="font-semibold text-slate-700 text-sm font-montserrat">
        {itemCount} Items
      </p>
      <h2 className="uppercase font-bold text-xl md:text-2xl lg:text-3xl text-slate-800">
        {title}
      </h2>
      <Link
        href={`/products?category=${path}`}
        className="flex items-center text-sm md:text-base font-medium bg-amber-400 w-fit px-3 py-2 rounded space-x-2 mt-2"
      >
        <span>Read More </span>
        <BsArrowRight className="text-lg" />
      </Link>
    </div>
  );
};

export default CategoryText;
