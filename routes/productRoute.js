import express from 'express';
import ProductController from '../controller/productController.js';
import InquiryController from '../controller/InquiryController.js';
const router = express.Router();

router.post(`/inquiry`,InquiryController.inquiry)
router.get(`/inquiry`,InquiryController.getInquiry)
router.post(`/products`,ProductController.Product)
router.get(`/products`,ProductController.getProducts)
export default router