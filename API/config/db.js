import mongoose from "mongoose";


export const connectDb = async ()=>{
    const uri = process.env.url

    if (!uri) throw new Error("l'url mongoo n'existe pas")
    await mongoose.connect(uri, {
        dbName: "finance"
})
}