import mongoose from 'mongoose'
const inquirySchema =mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    message:String,
    productDetails:[{
    image:String,
    images:Array,
    title:String,
    contactNumber:Number,
    emailId:String,
    description:String,
    richDescription:String,
    productId:String,
    countInStock:String
    // brand:String,
    // price:Number,
    // rating:Number,
    }],
    createdAt:Number
})
const Inquiry = mongoose.model('Inquiry',inquirySchema)
export default Inquiry