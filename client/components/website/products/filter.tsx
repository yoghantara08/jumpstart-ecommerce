import FilterCategory from "./filter-category";
import FilterPrice from "./filter-price";

const ProductFilter = () => {
  return (
    <div className="w-full max-w-xs rounded bg-white border border-gray-200">
      <div className="py-3 w-full p-5 bg-gray-200 rounded-t">
        <h2 className="text-lg font-medium">Filter Products</h2>
      </div>
      <div className="p-5">
        <FilterCategory />
        <FilterPrice />
      </div>
    </div>
  );
};

export default ProductFilter;
