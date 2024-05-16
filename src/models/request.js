import  { Schema, model } from "mongoose";

const RequestSchema = new Schema({
    productName: String,
    productDescription: String,
    image: String,
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product' }
},{timestamps: true});

const Request = model("Request", RequestSchema);

export default Request;