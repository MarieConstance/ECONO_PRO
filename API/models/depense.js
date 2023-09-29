  import {Schema, model} from "mongoose";

  const depenseSchema = new Schema({
    montant: {
        type:Number,
         required: true
    },
    date: {
        type:String,
         required: true
    },
    categorie:{
        type:String, 
        required: true
    },
    modepaiement: {
        type:String, 
        required: true
    },
    description: {
        type:String, 
        required: true
    },
    createdAt: {
        type:Date,
        default: new Date()
    }

})
export default model("Depense", depenseSchema)
