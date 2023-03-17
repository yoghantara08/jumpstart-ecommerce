import { Router } from "express";
import {
  getCategories,
  getFeaturedProducts,
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

// get featured products
productsRoute.get("/featured", getFeaturedProducts);

// get product details
productsRoute.get("/:slug", getProductDetails);

export default productsRoute;
