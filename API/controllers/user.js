import User from "../models/user.js";

class userController {
    static async create(req,res){
        try { 
            const {email,...body} = req.body
            const user = await User.find({email:email})
            if (user) {
                res.status(404).json({
                    status: false,
                    message: "cet utilisateur existe déja ."
                });
                return
            }
                const userCreate = await User.create({
                email:email, ...body
            })
            if(!userCreate ){
                res.status(404).json({
                    status: false,
                    message: "cet utilisateur non enregistré."
                });
                return
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
} 
export default userController;