import Subscribe from '../models/subscribe.js';
class SubscribeController{
    static subscribe =  async(req,res)=>{ 
        const subscribes = new Subscribe({
            emailId:req.body.emailId,
            createdAt:new Date().getTime()
        })
        subscribes.save().then((createSubscription)=>{
            res.status(200).json({data:createSubscription,emailId:req.body.emailId, success:true})
        }).catch((error)=>{
            res.status(500).json({
                error: error,
                success:false
            })
        })
    }
    static getSubscribe = async (req,res)=>{ //api+'/products'
        const subscribe = await Subscribe.find()
        if(!subscribe){
            res.status(500).json({success:false});
        }
        res.send(subscribe)
       
    }
}

export default SubscribeController