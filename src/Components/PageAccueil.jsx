import React from "react";
import "../Style/PageAccueil.css";
import Navbar from "./Navbar";
// import imag from "../assets/micheile-henderson-ZVprbBmT8QA-unsplash.jpg"

function PageAccueil() {
  return (
    <>
      <Navbar />
      <div className="cadrefontimage"></div>
      <div className="divcentral">
        <h2>
          Bienvenu à <span>ECONO_PRO</span>
        </h2>
        <h3>
          Votre plateforme qui vous accompagne dans le suivi de vos dépenses
          <br />
          personnelles et vous aide à gérer vos finances
        </h3>
      </div>
      <button>Commencer</button>
    </>
  );
}
export default PageAccueil;
