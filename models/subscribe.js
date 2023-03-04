import mongoose from 'mongoose'
const subscribeSchema =mongoose.Schema({
    emailId:String,
    createdAt:Number
})
const Subscribe = mongoose.model('Subscribe',subscribeSchema)
export default Subscribe