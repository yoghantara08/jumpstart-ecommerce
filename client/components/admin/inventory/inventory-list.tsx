import { IMAGE_URL } from "@/lib/config";
import { IProducts } from "@/types/products-type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

interface Props {
  products: IProducts[] | undefined;
}

const InventoryList: React.FC<Props> = ({ products }) => {
  return (
    <div className="relative overflow-x-auto mt-3">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Slug
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Image
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Name
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Category
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Stock
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Price
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              View Details
            </th>
            <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td className="border border-slate-200 px-6 py-2">
                {product.slug}
              </td>
              <td className="border border-slate-200 px-6 py-2 whitespace-nowrap ">
                <div className="w-24 h-20">
                  <Image
                    src={`${IMAGE_URL}/${product.image}`}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="w-full h-full"
                  />
                </div>
              </td>
              <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                {product.name}
              </td>
              <td className="border border-slate-200 px-6 py-2 text-lightBlue whitespace-nowrap">
                <Link href={`/products?category=${product.category}`}>
                  {product.category}
                </Link>
              </td>
              <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                {product.stock}
              </td>
              <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                ${product.price}
              </td>
              <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                <Link
                  href={`/products/${product.slug}`}
                  className="px-4 py-2 rounded bg-lightBlue text-white"
                >
                  View Details
                </Link>
              </td>
              <td className="border border-slate-200 px-6 py-3 whitespace-nowrap">
                <div className="flex gap-3">
                  <Link href={`/admin/inventory/${product.slug}`}>
                    <MdEdit className="w-6 h-6 text-green-600" />
                  </Link>
                  <MdDelete className="w-6 h-6 text-red-600" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
