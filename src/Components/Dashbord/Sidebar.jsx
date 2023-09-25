import React from "react";
import "../../Style/Sidebar.css"
import { Link } from "react-router-dom";

function SideBar() {
    return(
        <div className="menu">
        <div className="monmenu">
        <div>
        <Link className="lien" id="active">
        <span class="material-symbols-outlined">
            home
        </span>Accueil</Link>
        </div>
        <div>
        <Link to="/SaisirDepense" className="lien" >
        <span class="material-symbols-outlined">
            edit_note
        </span>Saisir Dépense</Link>
        </div>
        <div>
        <Link to="/Budget" className="lien">
        <span class="material-symbols-outlined">
            account_balance_wallet
        </span>Définir un budget</Link>
        </div>
        <div>
        <Link to={"/Alerte"} className="lien">
        <span class="material-symbols-outlined">
            notifications_active
        </span>Alerte</Link>
        </div>
        <div>
        <Link className="lien">
        <span class="material-symbols-outlined">
            category
        </span>Catégorisation</Link>
        </div>
        <div>
        <Link className="lien">
        <span class="material-symbols-outlined">
            settings
        </span>Paramètre</Link>
        </div>
        <div>
        <Link className="lien">
        <span class="material-symbols-outlined">
            logout
        </span>Déconnexion</Link>
        </div>
    </div>
  </div>
    ) 
}
export default SideBar;


