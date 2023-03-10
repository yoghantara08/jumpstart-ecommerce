import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";

const data = [
  { category: "Electronics" },
  { category: "Accessories" },
  { category: "T-shirt" },
  { category: "Sports" },
];

const FilterCategory = () => {
  const router = useRouter();

  return (
    <Menu>
      <div className="relative ">
        <Menu.Button className="relative border flex items-center justify-between border-gray-300 px-5 py-3 rounded bg-gray-50 w-full">
          <span>Category</span>
          <FiChevronDown className="h-5 w-5" />
        </Menu.Button>
        <Menu.Items className="absolute mt-1 bg-white border border-gray-200 py-3 rounded w-full z-10">
          {data.map((data) => (
            <Menu.Item key={data.category}>
              <Link
                href={{
                  pathname: router.pathname,
                  query: {
                    ...router.query,
                    category: data.category.toLowerCase(),
                  },
                }}
                className="block px-5 py-1 hover:bg-gray-200"
              >
                {data.category}
              </Link>
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default FilterCategory;
