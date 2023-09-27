import User from "../models/user.js";
import bcrypt from "bcrypt"
class userController {
    static async create(req,res){
        try { 
            console.log(req.body)
            const {email,password,...body} = req.body
            const user = await User.findOne({email:email})   
            if (user) {
                return res.status(404).json({
                    status: false,
                    message: "cet utilisateur existe déja ."
                });
                
            }
                const userCreate = await User.create({
                email:email,
                password: await bcrypt.hash(password,10),
                ...body
            })
            if(!userCreate ){
                res.status(404).json({
                    status: false,
                    message: "cet utilisateur non enregistré."
                });
                return;
            }
            res.status(200).json({
                status: true,
                message: "Enregistrement effectué."
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }   
       
    }

    static async getall(){
        try{
            const user = await User.find({})
            if (!user) {
                return res.status(404).json({
                    status:false,
                    message: "Aucun utilisateur n'a été trouvé"
                })
            }
            return res.status(200).json({
                status:true,
                message : user
            })
        }catch(error){
            res.status(500).json({
                status: false,
                message: "Erreur de serveur"
            })
        }
    }

    static async login(req,res){
        try {
            User.findOne({email:req.body.email})
           .then((data)=>{
            if(!data){
                res.status(400).json({msg:"Email introuvable"})
                return
            }
            
            bcrypt.compare(req.body.password,data.password)

            .then((com)=>{
                if (!com) {
                    res.status(400).json({msg:"Mot de passe incorrect"})
                    return
                }
                    console.log(com);
                    res.status(201).json ({
                        userId:data._id,
                        status:"User",
                        token: jwt.sign({userId: data._id}, "RANDAOM_TOKEN_KEY",{expiresIn: 24*3600})
                    })
                   
            })
            .catch((error)=>console.log(error.message))
            
           }) 
           .catch((error)=>res.status(400).json({error:error.message}))
        } 
        catch (error) {
            res.status(500).json({error:error.message})
            return 
        }
    }

} 
export default userController;