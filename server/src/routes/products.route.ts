import { Router } from "express";
import {
  getCategories,
  getProductDetails,
  getProducts,
} from "../controllers/products.controller";

/**
 * Products Routes
 * path: /products
 */
const productsRoute = Router();

// get categories
productsRoute.get("/categories", getCategories);

// get products
productsRoute.get("/", getProducts);

// get product details
productsRoute.get("/:slug", getProductDetails);

export default productsRoute;