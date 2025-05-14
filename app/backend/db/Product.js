import mongoose from "mongoose";

const Product = mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
});

export default mongoose.model('products', Product)