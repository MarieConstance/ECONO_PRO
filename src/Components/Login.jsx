import React from "react";
import "../Style/login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiUrl } from "../../API/config/env";

function Login() {   
    const {register, handleSubmit, watch}= useForm(
        {
            nom:"",
            prenom:"",
            email:"",
            password:"",
        }
    );

    const {mutate:enregistrer}=useMutation({
        mutationFn: async(donne)=>{
            console.log(`${apiUrl}api/user`);
            const respone = await axios.get(``)
        }
    })
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <p class="title">Connexion</p>
    <p class="message">Connectez-vous maintenant à notre application. </p>
        <div class="flex">
        <label>
            <input className="input" {...login("nom", { required: true })} type="text" placeholder="" required=""/>
            <span>Nom</span>
        </label>

        <label>
            <input className="input" {...login("prenoms", { required: true })} type="text" placeholder="" required=""/>
            <span>Prénoms</span>
        </label>
    </div>  
            
    <label>
        <input className="input" {...login("email", { required: true })} type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" {...password("nom", { required: true })} type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <button className="submit" > Connexion </button>
    <p class="signin"> N'avez vous pas de compte ?<Link to="/Register">S'inscrire</Link> </p>
</form>
  );
}
export default Login;
