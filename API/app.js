import express from "express";
import  dotenv from "dotenv"; 
import cors from "cors";
import { connectDb } from "./config/db.js";
import routerUser from "./routes/user.js";

dotenv.config();
console.log(process.env.test);

const port  = 3000;   
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use("/api",routerUser)

connectDb().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`);
    })
}).catch((error)=>{
    console.log(error);
})