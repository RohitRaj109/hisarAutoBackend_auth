import mongoose, { Schema } from "mongoose";
const productSchema =mongoose.Schema({
    // _id:String,
    image:String,
    images:Array,
    title:String,
    contactNo:Number,
    emailId:String,
    description:String,
    richDescription:String,
    brand:String,
    price:Number,
    rating:Number,
    countInStock:{
        type:Number,
        required:true
    },
    createdAt:Number
})
const Product = mongoose.model('Products',productSchema)
export default Product