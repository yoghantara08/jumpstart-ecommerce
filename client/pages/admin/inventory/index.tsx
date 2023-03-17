import React, { useState } from "react";
import Link from "next/link";
import InventoryList from "@/components/admin/inventory/item-list";
import AdminLayout from "@/components/admin/layout/main-layout";
import SearchInput from "@/components/admin/search/search-input";

const InventoryPage = () => {
  const [search, setSearch] = useState<string | undefined>();

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
        <InventoryList />
      </div>
    </AdminLayout>
  );
};

export default InventoryPage;
