import { useAuth } from "@/contexts/auth-context";
import { getTopProductsAPI } from "@/lib/admin-api";
import { IMAGE_URL } from "@/lib/config";
import { ITopProducts } from "@/types/admin-type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashboardBestProducts = () => {
  const { token } = useAuth();
  const [topProducts, setTopProducts] = useState<ITopProducts[]>([]);

  useEffect(() => {
    if (token) {
      getTopProductsAPI(token)
        .then((res) => {
          setTopProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <div className="bg-light mt-5 rounded-lg py-4 px-6 shadow-sm">
      <h3 className="font-medium text-lg">Top Selling Products</h3>
      <div className="relative overflow-x-auto mt-2">
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
                Product Name
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Category
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Price
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Quantity
              </th>
              <th className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product._id}>
                <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-lightBlue hover:underline"
                  >
                    {product.slug}
                  </Link>
                </td>
                <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
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
                <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                  <Link
                    href={`/products?category=${product.category}`}
                    className="text-lightBlue hover:underline"
                  >
                    {product.category}
                  </Link>
                </td>
                <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                  {product.quantity}
                </td>
                <td className="border border-slate-200 px-6 py-2 whitespace-nowrap">
                  ${product.totalPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardBestProducts;
