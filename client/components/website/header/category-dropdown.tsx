import { Menu } from "@headlessui/react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const CategoryDropdown = () => {
  return (
    <Menu as="div" className="relative w-fit flex justify-center">
      <Menu.Button className="flex items-center justify-center space-x-1">
        <span>Category</span>
        <BsChevronDown />
      </Menu.Button>
      <Menu.Items className="absolute mt-7 py-4 px-6 rounded bg-white drop-shadow border flex flex-col gap-3">
        <Menu.Item>
          <Link href="/products">Products</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/products">Products</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/products">Products</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/products">Products</Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default CategoryDropdown;
