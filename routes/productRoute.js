import express from 'express';
import ProductController from '../controller/productController.js';
const router = express.Router();


router.post(`/products`,ProductController.Product)
router.get(`/products`,ProductController.getProducts)
export default router