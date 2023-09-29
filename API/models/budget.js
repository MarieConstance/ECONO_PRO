import { Schema, model} from "mongoose";

const budgetSchema = new Schema({
    mois: {
        type:String,
         required: true
    },
    annee: {
        type:String,
         required: true
    },
    alimentation:{
        type:String, 
        required: true
    },
    
    logement: {
        type:String, 
        required: true
    },
    transport: {
        type:String, 
        required: true
    },
    divertissement: {
        type:String, 
        required: true
    },
    voyages: {
        type:String, 
        required: true
    },
    santé: {
        type:String, 
        required: true
    },
    education: {
        type:String, 
        required: true
    },
    vêtements: {
        type:String, 
        required: true
    },
    createdAt: {
        type:Date,
        default: new Date()
    }
})
export default model("budget", budgetSchema);