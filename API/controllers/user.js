import User from "../models/user.js";
import depense from "../models/depense.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
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
                else{
                    res.status(201).json ({
                        userId:data._id,
                        status:"User",
                        token: jwt.sign({userId: data._id}, "RANDAOM_TOKEN_KEY",{expiresIn: 24*3600})
                    })
                }
                
                   
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


    // ...
    
    static async enregistrerDepense(req, res) {
      try {
        // Extrayez les données de la requête
        const { montant, date, categorie, methodePaiement, description } = req.body;
    
        // Créez une nouvelle instance de Depense
        const nouvelleDepense = new depense({
          montant,
          date,
          categorie,
          methodePaiement,
          description,
        });
    
        // Enregistrez la nouvelle dépense dans la base de données
        await nouvelleDepense.save();
    
        res.status(201).json({
          status: true,
          message: 'Dépense enregistrée avec succès',
          depense: nouvelleDepense, // Si vous souhaitez renvoyer les données de la dépense créée
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          status: false,
          message: 'Erreur lors de l\'enregistrement de la dépense',
        });
      }
    }
    

} 
export default userController;