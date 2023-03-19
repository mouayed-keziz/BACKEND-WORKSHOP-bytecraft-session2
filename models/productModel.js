import { model, Schema } from "mongoose";


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: Number,
    description: String,
}, { timestamps: true })

const Product = model("productttttt", ProductSchema)

export default Product