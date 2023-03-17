import { ICategory } from "@/types/products-type";
import { API } from "./config";

export const addCategoryAPI = async (token: string | null, data: ICategory) => {
  return await API.post("/admin/add-category", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getCategoriesAPI = async () => {
  return await API.get("/admin/categories");
};

export const addProductAPI = async (token: string | null, data: FormData) => {
  return await API.post("/admin/add-product", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
