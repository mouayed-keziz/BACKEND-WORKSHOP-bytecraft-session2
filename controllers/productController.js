import Product from "../models/productModel.js";

const create_product = async (req, res) => {
    const { price, name, description } = req.body;
    const newProduct = new Product({ price, name, description })
    await newProduct.save();
    res.send(newProduct)
}


const delete_product = async (req, res) => {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.send(deletedProduct)
}



export { create_product, delete_product }