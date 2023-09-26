import React from "react";
import "../Style/Register.css"
import { Link } from "react-router-dom";
import { apiUrl } from "../../API/config/env";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'

function Register() {
      const{register, handleSubmit, watch}=useForm(
        {
            nom: "",
            prenoms: "",
            email: "",
            password: ""
        }
      );

    //   const addUser = async(values)=>{
    //     console.log(values)
    //     const response = await axios.post(`${apiUrl}/user/`,values)
    //     return response
    //   }
      const {mutate:enregistrer} = useMutation({
        mutationFn: async(donne)=>{
            console.log(`${apiUrl}api/user/`)
            const response = await axios.post(`${apiUrl}/api/user/`,donne)
            return response
        },
        onSuccess: (suces)=>{
            console.log(suces)
        },
        onError: (e)=>{
            console.log(e.response.data.message)
        }
      })
      const onSubmit = (data)=>enregistrer(data);
        return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="title">Inscription </p>
            <p className="message">Inscrivez-vous maintenant et obtenez un accès complet à notre application. </p>
            <div class="flex">
                <label>
                    <input className="input" {...register("nom", { required: true })} type="text" placeholder="" required=""/>
                    <span>Nom</span>
                </label>

                <label>
                    <input className="input" {...register("prenoms", { required: true })} type="text" placeholder="" required=""/>
                    <span>Prénoms</span>
                </label>
             </div>  
            
            <label>
                <input className="input" {...register("email", { required: true })} type="email" placeholder="" required=""/>
                <span>Adresse Email</span>
            </label> 
                
            <label>
                <input className="input" {...register("password", { required: true })} type="password" placeholder="" required=""/>
                <span>Mot De Passed</span>
            </label>
            <label>
                <input className="input" {...register("confirme", { required: true, validate: (values)=> values ===  watch("password") || "mot de passe incorrect" })} type="password" placeholder="" required=""/>
                <span>Confirmer Mot De Passe</span>
            </label>
            <button className="submit">  S'inscrire</button>
            <p className="signin">Vous avez déjà un compte ? <Link to="/Login">Se connecter</Link> </p>
        </form>
    )
}
export default Register;