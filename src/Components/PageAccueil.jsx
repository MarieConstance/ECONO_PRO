import React from "react";
import "../Style/PageAccueil.css";
import Navbar from "./Navbar";
// import imag from "../assets/micheile-henderson-ZVprbBmT8QA-unsplash.jpg"

function PageAccueil() {
  return (
    <>
      <Navbar />
      <div className="cadrefontimage">
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
        <button class="button">
          <p>Commencer</p>
        </button>
        <div className="cadreblanc">
          <div className="cadreblanc1">
            <span class="material-symbols-outlined">payments</span>
            <p>
              Avec <span>ECONO_PRO</span> dépenser intelligemment votre argent
              tout en économisant vos finances.
            </p>
          </div>
          <div className="divmilieu">
            <div className="divmilieu1">
              <span class="material-symbols-outlined">category</span>
              <p>
                Avec <span>ECONO_PRO</span> définissez votre budget mensuel en
                fonction de différentes catégories de dépenses.
              </p>
            </div>
            <div className="divmilieu2">
              <span class="material-symbols-outlined">description</span>
              <p>
                Avec <span>ECONO_PRO</span> vous avez un rapport financier
                détaillés sur la situation financière.
              </p>
            </div>
          </div>
          <div className="cadreblanc1">
            <span class="material-symbols-outlined">notifications_active</span>
            <p>
              Avec <span>ECONO_PRO</span> recevez une alerte lorsque vos
              dépenses mensuelles dépasse votre budget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default PageAccueil;
