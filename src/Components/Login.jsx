import React from "react";
import "../Style/login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiUrl } from "../../API/config/env";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() { 
    const navigate = useNavigate(); 
    const {register, handleSubmit, watch}= useForm(
        {
            email:"",
            password:"",
        }
    );
    
    const log = async (donne)=>{
        console.log(`${apiUrl}/api/login`);
        const respone = await axios.post(`${apiUrl}/api/login`,donne)
            return respone
            
    }
    const {mutate:enregistrer} = useMutation({
        mutationFn: (donne)=>log(donne),
        onSuccess: (suces)=>{
            console.log(suces);
            navigate("/Tableaubord")
        },
        onError:(e)=>{
            console.log(e);
        }
    })
    const onSubmit = (data)=> enregistrer(data);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <p class="title">Connexion</p>
    <p class="message">Connectez-vous maintenant à notre application. </p>
            
    <label>
        <input className="input" {...register("email", { required: true })} type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" {...register("password", { required: true })} type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <button className="submit" > Connexion </button>
    <p class="signin"> N'avez vous pas de compte ?<Link to="/Register">S'inscrire</Link> </p>
</form>
  );
}
export default Login;
