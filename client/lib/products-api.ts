import { ICategory } from "@/types/products-type";
import { API } from "./config";

// ADMIN
export const addCategoryAPI = async (token: string | null, data: ICategory) => {
  return await API.post("/admin/add-category", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addProductAPI = async (token: string | null, data: FormData) => {
  return await API.post("/admin/add-product", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const editProductAPI = async (
  token: string | null,
  data: FormData,
  slug: string
) => {
  return await API.post(`/admin/edit-product/${slug}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// PUBLIC
export const getCategoriesAPI = async () => {
  return await API.get("/products/categories");
};

export const getProductsAPI = async () => {
  return await API.get("/products");
};

export const getProductDetailsAPI = async (productSlug: string) => {
  return await API.get(`/products/${productSlug}`);
};
