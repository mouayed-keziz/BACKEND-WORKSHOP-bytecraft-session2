import { Router } from "express";
import { register_new_user, login, delete_user } from "../controllers/userController.js";


const UserRouter = Router();

UserRouter.get("/", (req, res) => {
    res.send("this is the root of user router")
})

UserRouter.post("/register", register_new_user)
UserRouter.post("/login", login)
UserRouter.delete("/delete/:id", delete_user)



export default UserRouter;

