import mongoose from 'mongoose'
const staticContentSchema =mongoose.Schema({
   about:[
    { h1:String,p:String}
   ],
//    terms:[ { h1:String,p:String}],
//    privacy:[ { h1:String,p:String}]
})
const StaticData = mongoose.model('StaticData',staticContentSchema)
export default StaticData