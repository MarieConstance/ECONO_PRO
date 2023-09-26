import { Schema, model } from "mongoose";

const userSchema = new Schema({   
        nom: {
            type:String,
             required: true
        },
        prenoms: {
            type:String,
             required: true
        },
        email:{
            type:String, 
            required: true
        },
        tel: {
            type:String,
             required: false
        },
        password: {
            type:String, 
            required: true
        },
        createdAt: {
            type:Date,
            default: new Date()
        }
})

export default model("User", userSchema);