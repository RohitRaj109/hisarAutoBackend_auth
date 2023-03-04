import StaticData from '../models/staticContent_about.js';
class StaticController{
    static about = async (req,res)=>{ 
    const staticData = new StaticData({
        about:[
            { h1:"heading1",p:"description 1"}
           ],
        //    terms:req.body.terms,
        //    privacy:req.body.privacy,
        createdAt:new Date().getTime()
    })
    staticData.save().then((staticD)=>{
        res.status(200).json(staticD)
    }).catch((error)=>{
        res.status(500).json({
            error: error,
            success:false
        })
    })
} 
    static getAbout = async (req,res)=>{ //api+'/products'
        const statics = await StaticData.find()
        if(!statics){
            res.status(500).json({success:false});
        }
        res.send({success:true,data:statics})
       
    }
}
export default StaticController