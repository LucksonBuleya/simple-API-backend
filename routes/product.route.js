import express from 'express';
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js';

//creating a router instance to define routes for product-related operations
const router = express.Router();

/// controller functions for handling product-related routes

// Retrieve all products in db
router.get('/', getProducts);
router.get("/:id", getProduct);

//Create a new product
router.post("/", createProduct);

//update a product
router.put('/:id', updateProduct);

//Delete a Product
router.delete('/:id', deleteProduct);

export default router;