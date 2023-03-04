import mongoose from "mongoose";

const buySchema = new mongoose.Schema({
    Product_id:{type:String,required:true,trim:true},
    transaction_id:{type:String,required:true,trim:true},
    customer_id:{type:String}
})
const BuyProduct = mongoose.model("buys",buySchema)
export default BuyProduct