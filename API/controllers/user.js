import User from "../models/user.js";

class userController {
    static async create(req,res){
        try { 
            const {email,...body} = req.body
            const user = await User.findOne({email:email})
            if (user) {
                return res.status(404).json({
                    status: false,
                    message: "cet utilisateur existe déja ."
                });
                
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
} 
export default userController;