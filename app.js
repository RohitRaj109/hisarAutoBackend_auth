import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors'
import connectDB from './config/connectdb.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoute.js'
import fileUpload from 'express-fileupload';
import cloudinary  from 'cloudinary';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT;
//const DATABASE_URL = process.env.DATABASE_URL
const DATABASE_URL = process.env.CONNECTION_STRING
connectDB(DATABASE_URL)

app.use(cors())
// app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(fileUpload({ useTempFiles:true }))
// app.use(express.urlencoded({limit:"50mb",extended:false}))
//load routes
app.use('/api/user',userRoutes)
app.use('/api/user',productRoutes)

// image upload start

mongoose.set('strictQuery', true)
cloudinary.config({ 
    cloud_name: 'dd74og52k', 
    api_key: '965389974274484', 
    api_secret: 'KjXUrswCQLwrJOC0ehZXwGQP6Ik',
    secure: true
  });
  app.post('/api/user/upload', async (req,res)=>{
      try{
        const file = req.files.user_file
        var options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
          };
        const result = await cloudinary.uploader.upload(file.tempFilePath, options)
        res.send({data:{url:result.url,secure_url:result.secure_url,success:true,status:200}})
    }catch (error) {
        console.error(error);
    }
   
  })
// image upload end 


app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})