import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductOrder = () => {
  const stock = 15;
  const options = Array.from({ length: stock }, (_v, index) => index + 1);

  const [selectedAmount, setSelectedAmount] = useState<number>(1);

  return (
    <div className="w-full max-w-xs h-fit rounded border border-gray-200 bg-white order-2 md:order-3 px-4 py-3">
      <h2 className="mb-3 text-2xl font-medium">Order Product</h2>
      <div className="flex gap-3">
        <Listbox value={selectedAmount} onChange={setSelectedAmount}>
          <div className="relative w-full max-w-[7rem]">
            <Listbox.Button className="px-5 py-1 rounded border border-gray-200 w-full flex items-center justify-between">
              <span>{selectedAmount}</span>
              <FiChevronDown className="h-5 w-5" />
            </Listbox.Button>
            <Listbox.Options
              className="absolute mt-1 w-full rounded max-h-40 overflow-auto bg-white border border-gray-200 py-1"
              style={{ scrollbarWidth: "thin" }}
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option}
                  value={option}
                  className="px-5 py-1 cursor-pointer hover:bg-gray-200"
                >
                  {option}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
        <div className="font-medium flex items-center">
          <p>Stock: {stock}</p>
        </div>
      </div>
      <div></div>
      <div>
        <button className="px-5 py-2 rounded w-full bg-tosca text-white mt-4 flex items-center space-x-3 justify-center">
          <MdOutlineShoppingCart className="w-5 h-5" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductOrder;
