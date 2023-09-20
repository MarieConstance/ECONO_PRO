import { Schema, model } from "mongoose";

const userSchema = new Schema({
        name: {
            type:String,
             required: true
        },
        lastname: {
            type:String,
             required: true
        },
        email:{
            type:String, 
            required: true
        },
        tel: {
            type:String,
             required: true
        },
        passeword: {
            type:String, 
            required: true
        }
})

export default model("User", userSchema);