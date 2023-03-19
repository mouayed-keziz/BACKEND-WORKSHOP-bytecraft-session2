// npm install express nodemon mongoose dotenv winston

import express, { json } from "express";
import { connect } from "mongoose";
import UserRouter from "./routers/userRouter.js";
import ProductRouter from "./routers/productRouter.js";
import dotenv from "dotenv";

dotenv.config()


const app = express();

connect(process.env.DB_URL).then(() => {
    console.log("connected to db")
}).catch((err) => {
    console.log("error")
})

app.use(json())
app.use("/users", UserRouter)
app.use("/products", ProductRouter)

app.get("/", (req, res) => {
    res.send({ msg: "hello@" })
})


app.listen(process.env.PORT, () => {
    console.log(`http://loclahost:${process.env.PORT}`)
})