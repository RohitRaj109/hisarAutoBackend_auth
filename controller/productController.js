import Product from '../models/Products.js';
import cloudinary  from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dd74og52k', 
    api_key: '965389974274484', 
    api_secret: 'KjXUrswCQLwrJOC0ehZXwGQP6Ik',
    secure: true
  });
class ProductController {
   static imageUpload = async (req,res,next)=>{
    console.log(req)
    const file= req.files.user_file;
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
        console.log(result)
        res.send({data:{url:result.url,secure_url:result.secure_url,success:true,status:200}})
    })}
    static Product = async (req,res)=>{ 
        const product = new Product({
            image:req.body.image,
            images:req.body.images,
            title:req.body.title,
            contactNo:req.body.contactNo,
            emailId:req.body.emailId,
            description:req.body.description,
            richDescription:req.body.richDescription,
            countInStock:req.body.countInStock,
            createdAt:new Date().getTime()
        })
        product.save().then((createdProduct)=>{
            res.status(200).json(createdProduct)
        }).catch((error)=>{
            res.status(500).json({
                error: error,
                success:false
            })
    })}
    static getProducts = async (req,res,next)=>{ //api+'/products'
        const products = await Product.find()
        if(!products){
            res.status(500).json({success:false});
        }
        res.send(products)
    }

}
export default ProductController