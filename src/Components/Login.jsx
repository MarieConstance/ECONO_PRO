import React from "react";
import "../Style/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <form className="form">
    <p class="title">Connexion</p>
    <p class="message">Connectez-vous maintenant à notre application. </p>
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
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <button className="submit" > <Link to="/Tableaubord" className="lien">Connexion</Link> </button>
    <p class="signin"> N'avez vous pas de compte ?<Link to="/Register">S'inscrire</Link> </p>
</form>
  );
}
export default Login;
