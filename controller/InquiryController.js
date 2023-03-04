import Inquiry from '../models/inquiry.js';
class InquiryController {
    static inquiry = async (req,res)=>{ 
    //console.log(req.body)
    const inquiry = new Inquiry({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message,
        productDetails: req.body.productDetails,
        // [{
        // image:req.body.productDetails.image,
        // images:req.body.productDetails.images,
        // title:req.body.productDetails.title,
        // contactNumber:req.body.productDetails.contactNumber,
        // emailId:req.body.productDetails.emailId,
        // description: req.body.productDetails.description,
        // richDescription:req.body.productDetails.richDescription,
        // countInStock:req.body.productDetails.countInStock,
        // productId:req.body.productDetails.productId,
        // brand:req.body.productDetails.brand,
        // price:req.body.productDetails.price,
        // rating:req.body.productDetails.rating,
       // }],
        createdAt:new Date().getTime()
    })
    inquiry.save().then((createInquiry)=>{
        res.status(200).json({data:createInquiry})
    }).catch((error)=>{
        res.status(500).json({
            error: error,
            success:false
        })
    })
}
  static getInquiry = async (req,res)=>{ //api+'/products'
    const inquiry = await Inquiry.find()
    if(!inquiry){
        res.status(500).json({success:false});
    }
    res.send(inquiry)
   
}
}
export default InquiryController