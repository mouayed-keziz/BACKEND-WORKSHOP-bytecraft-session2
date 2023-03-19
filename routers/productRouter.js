import { Router } from "express";
import { create_product, delete_product } from "../controllers/productController.js";


const ProductRouter = Router();

ProductRouter.get("/", (req, res) => {
    res.send("this is the root of product router")
})

ProductRouter.post("/new", create_product)
ProductRouter.delete("/delete/:id", delete_product)


export default ProductRouter;