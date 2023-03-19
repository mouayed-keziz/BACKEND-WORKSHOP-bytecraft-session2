import { model, Schema } from "mongoose";


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: String
}, { timestamps: true })

const User = model('user', userSchema)

export default User