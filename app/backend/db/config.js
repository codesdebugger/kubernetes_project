import mongoose from "mongoose";
// mongoose.set('strictQuery',true);
// mongoose.connect("mongodb://0.0.0.0:27017/ecomm-dashboard", (err)=>{
//     console.log(err)
// });


// mongoose.connect("mongodb://mongo-db:27017/ecomm-dashboard");
mongoose.connect("mongodb://root:password@mongodb-service:27017/ecomm-dashboard?authSource=admin");