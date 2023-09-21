import React from "react";
import "../Style/Register.css"
import { Link } from "react-router-dom";

function Register() {
      
    return(
        <form className="form">
    <p className="title">Inscription </p>
    <p className="message">Inscrivez-vous maintenant et obtenez un accès complet à notre application. </p>
        <div class="flex">
        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Nom</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Prénoms</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Adresse Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Mot De Passed</span>
    </label>
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Confirmer Mot De Passe</span>
    </label>
    <button className="submit"> <Link to="/Login"> S'inscrire</Link></button>
    <p className="signin">Vous avez déjà un compte ? <Link to="/Login">Se connecter</Link> </p>
</form>
    )
}
export default Register;