import Product from '../models/Products.js';
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: 'dd74og52k',
    api_key: '965389974274484',
    api_secret: 'KjXUrswCQLwrJOC0ehZXwGQP6Ik',
    secure: true
});
class ProductController {
    static Product = async (req, res) => {
        const product = new Product({
            image: req.body.image,
            images: req.body.images,
            title: req.body.title,
            contactNo: req.body.contactNo,
            emailId: req.body.emailId,
            description: req.body.description,
            richDescription: req.body.richDescription,
            countInStock: req.body.countInStock,
            createdAt: new Date().getTime()
        })
        product.save().then((createdProduct) => {
            res.status(200).json({ data: createdProduct, success: true })
        }).catch((error) => {
            res.status(500).json({
                error: error,
                success: false
            })
        })
    }
    static getProducts = async (req, res, next) => { //api+'/products'
        const products = await Product.find()
        if (!products) {
            res.status(500).json({ success: false });
        }
        res.status(200).send({ data: products, success: true })
    }
    static update = async (req, res, next) => {
        const id = req.params.id;
        if (!Product.exists(id)) {
            return res.status(404).send({
                message: "Product not found with id " + id,
            });
        }

        const updatedProduct = {
            image: req.body.image || product.image,
            images: req.body.images || product.images,
            title: req.body.title || product.title,
            contactNo: req.body.contactNo || product.contactNo,
            emailId: req.body.emailId || product.emailId,
            description: req.body.description || product.description,
            richDescription: req.body.richDescription || product.richDescription,
            countInStock: req.body.countInStock || product.countInStock,
            createdAt: new Date().getTime()
        };

        let product = await Product.updateOne({ _id: req.params.id }, { ...updatedProduct });

        res.send(
            {
                message: "Product updated successfully!",
                success: true,
            });
    };

    static delete = async (req, res, next) => {

        const { id } = req.params.id;
        const product = await Product.findById(req.body.id);
        console.log(product)
        if (!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.body.id,
            });
        }

        const result = await Product.deleteOne({ _id: req.body.id });

        if (result.deletedCount === 1) {
            res.send({ message: "Product deleted successfully!" });
        } else {
            res.status(500).send({
                message: "Error deleting product",
            });
        }
    }
}
export default ProductController