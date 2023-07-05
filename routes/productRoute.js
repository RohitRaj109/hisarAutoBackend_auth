import express from 'express';
import ProductController from '../controller/productController.js';
import InquiryController from '../controller/InquiryController.js';
import Cart from '../controller/cart.js';
const router = express.Router();

router.post(`/inquiry`,InquiryController.inquiry)
router.get(`/inquiry`,InquiryController.getInquiry)
router.post(`/products`,ProductController.Product)
router.get(`/products`,ProductController.getProducts)
router.post('/cart',Cart.addCart)
router.get('/cart',Cart.getCart)
router.post('/buy',Cart.buyProduct)
router.patch('/update/:id', ProductController.update);
router.delete('/delete/:id',ProductController.delete);
export default router