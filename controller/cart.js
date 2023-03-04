import cartModel from '../models/cartSchema.js'
import checkUserAuth from '../middleware/auth-middleware.js'
import BuyProduct from '../models/buyProduct.js'
class Cart{
    static addCart = async (req, res,next) => {
        const { productId, quantity, name, price } = req.body;
        const userId = checkUserAuth.userID
      
        try { 
            //no cart for user, create new cart
            const newCart = await cartModel.create({
              userId,
              products: [{ productId, quantity, name, price }]
            });
            
            return res.status(200).send(newCart);
          
        } catch (err) {
          console.log(err);
          res.status(500).send("Something went wrong");
        }
    }
    static getCart = async (req,res,next)=>{
            const cartData = await cartModel.find()
            if(!cartData){
                res.status(500).json({success:false});
            }
            res.send({success:true,data:cartData})      
    }
    static buyProduct = async (req,res,next)=>{
        try{
            const buyProduct = new BuyProduct({
                Product_id: req.body.Product_id,
                transaction_id: req.body.transaction_id,
                customer_id: req.body.customer_id
            })
            const buyProductData = await buyProduct.save();
            res.status(200).send({success:true,message:"Buying process Successfull",data:buyProductData})
      
        }catch(error){
            res.status(400).send({success:false,message:error});
        }
  }
}
export default Cart