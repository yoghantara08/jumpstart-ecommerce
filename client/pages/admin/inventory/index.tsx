import React, { useEffect, useState } from "react";
import Link from "next/link";
import InventoryList from "@/components/admin/inventory/inventory-list";
import AdminLayout from "@/components/admin/layout/main-layout";
import SearchInput from "@/components/admin/search/search-input";
import { IProducts } from "@/types/products-type";
import { getProductsAPI } from "@/lib/products-api";

const InventoryPage = () => {
  const [search, setSearch] = useState<string | undefined>();
  const [products, setProducts] = useState<IProducts[] | undefined>(undefined);
  const [filteredProducts, setFilteredProducts] = useState<
    IProducts[] | undefined
  >(undefined);

  useEffect(() => {
    getProductsAPI()
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!products) {
      return;
    }

    if (search === undefined || search === "") {
      // If search term is empty, set the products to the original list
      setFilteredProducts(products);
    } else {
      // Filter the products based on the search term
      const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredProducts(filteredProducts);
    }
  }, [products, search]);

  return (
    <AdminLayout title="Inventory">
      <div className="flex gap-4">
        <Link
          href="/admin/inventory/add-product"
          className="px-5 py-3 rounded bg-lightBlue text-white font-medium"
        >
          Add Product
        </Link>
        <Link
          href="/admin/inventory/add-category"
          className="px-5 py-3 rounded bg-lightBlue text-white font-medium"
        >
          Add Category
        </Link>
      </div>
      <div className="bg-light rounded-lg py-4 px-6 shadow-sm mt-5">
        <SearchInput setValue={setSearch} />
        <InventoryList products={filteredProducts} />
      </div>
    </AdminLayout>
  );
};

export default InventoryPage;
