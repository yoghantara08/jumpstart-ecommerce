import { Router } from "express";
import { getCategories, getProducts } from "../controllers/products.controller";

/**
 * Products Routes
 * path: /products
 */
const productsRoute = Router();

// get categories
productsRoute.get("/categories", getCategories);

// get products
productsRoute.get("/", getProducts);

export default productsRoute;
