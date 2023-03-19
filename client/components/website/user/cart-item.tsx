import { useCart } from "@/contexts/cart-context";
import { IMAGE_URL } from "@/lib/config";
import { IProducts } from "@/types/products-type";
import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import { FiChevronDown, FiTrash2 } from "react-icons/fi";

interface Props {
  quantity: number;
  product: IProducts;
}

const CartItem: React.FC<Props> = ({ product, quantity }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(quantity);
  const { deleteItem, updateItem } = useCart();

  const options = Array.from(
    { length: product.stock },
    (_v, index) => index + 1
  );

  const deleteHandler = async () => {
    await deleteItem(product._id);
  };

  const updateHandler = async (option: number) => {
    setSelectedAmount(option);
    await updateItem(product._id, option);
  };

  return (
    <div className="flex justify-between items-center flex-wrap gap-3 py-3 px-5 border border-gray-300 rounded bg-white">
      <div className="flex gap-3 lg:gap-5">
        <picture className="rounded overflow-hidden flex w-20 h-16 border border-gray-300">
          <img
            src={`${IMAGE_URL}/${product.image}`}
            alt={product.name}
            className="w-full h-full object-center"
          />
        </picture>
        <div className="w-40">
          <p className="font-medium font-montserrat">{product.name}</p>
          <p className="font-medium">
            {quantity} x ${product.price}
          </p>
        </div>
        <div className="flex gap-3 min-w-[100px]">
          <Listbox value={selectedAmount} onChange={updateHandler}>
            <div className="relative w-full max-w-[7rem]">
              <Listbox.Button className="px-5 py-1 rounded border border-gray-200 w-full flex items-center justify-between">
                <span>{selectedAmount}</span>
                <FiChevronDown className="h-5 w-5" />
              </Listbox.Button>
              <Listbox.Options
                className="absolute mt-1 w-full z-20 rounded max-h-40 overflow-auto bg-white border border-gray-200 py-1"
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
        </div>
      </div>
      <button
        className="text-red-400 border border-red-300 p-2 rounded hover:bg-red-100 h-fit"
        onClick={deleteHandler}
      >
        <FiTrash2 className="text-xl" />
      </button>
    </div>
  );
};

export default CartItem;
