import Link from "next/link";
import FilterCategory from "./filter-category";
import FilterPrice from "./filter-price";

const ProductFilter = () => {
  return (
    <div className="w-full md:max-w-[17rem] lg:max-w-xs h-fit rounded bg-white border border-gray-200">
      <div className="py-3 w-full p-5 bg-gray-200 rounded-t">
        <h2 className="text-lg font-medium">Filter Products</h2>
      </div>
      <div className="p-5">
        <FilterCategory />
        <FilterPrice />
        <Link
          href="/products"
          className="flex justify-center p-3 rounded bg-yellow-500  font-medium mt-3 hover:opacity-90"
        >
          Clear Filter
        </Link>
      </div>
    </div>
  );
};

export default ProductFilter;
