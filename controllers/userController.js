import User from "../models/userModel.js"

const register_new_user = async (req, res) => {
    const { email, name } = req.body
    const newUser = new User({ email, name })
    await newUser.save()
    res.send(newUser)
}

const login = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email })
    if (user) {
        res.send(user)
    } else {
        res.send({ msg: "user not found" })
    }
}


const delete_user = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id)
    if (user) {
        res.send(user)
    } else {
        res.send({ msg: "user not found" })
    }
}


export { register_new_user, login, delete_user }


