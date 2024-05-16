import  { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    productName: {type: String, required: true},
    productDescription: {type: String, required:true},
    price: {type: String, required: true},
    department: {type: String, required: true},
    image: {type: String,required: true},
    id: {type: String, required: true}
},{timestamps: true});

const Product = model("Product", ProductSchema);

export default Product;