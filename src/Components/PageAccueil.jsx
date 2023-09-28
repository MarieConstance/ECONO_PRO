import React from "react";
import "../Style/PageAccueil.css";
import "../Style/Formulairecontact.css";
import Navbar from "./Navbar";
import imag from "../assets/calcule1.jpg";
import image from "../assets/epargnecochon.jpg";
import imge from "../assets/apropos3.jpg";
import Footer from "./Footer";


function PageAccueil() {
  return (
    <>
      <Navbar/>
     <div className="backgrond">
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
        <button className="button">
          <p>Commencer</p>
        </button>
        <div className="cadreblanc" >
          <div className="cadreblanc1">
            <span className="material-symbols-outlined">payments</span>
            <p>
              Avec <span>ECONO_PRO</span> dépenser intelligemment votre argent
              tout en économisant vos finances.
            </p>
          </div>
          <div className="divmilieu">
            <div className="divmilieu1">
              <span className="material-symbols-outlined">category</span>
              <p>
                Avec <span>ECONO_PRO</span> définissez votre budget mensuel en
                fonction de différentes catégories de dépenses.
              </p>
            </div>
            <div className="divmilieu2">
              <span className="material-symbols-outlined">description</span>
              <p>
                Avec <span>ECONO_PRO</span> vous avez un rapport financier
                détaillés sur la situation financière.
              </p>
            </div>
          </div>
          <div className="cadreblanc1">
            <span className="material-symbols-outlined">notifications_active</span>
            <p>
              Avec <span>ECONO_PRO</span> recevez une alerte lorsque vos
              dépenses mensuelles dépasse votre budget.
            </p>
          </div>
        </div>
      </div>

      <h2 className="title-apropos" id="monapropos">
        Pourquoi choisir <span className="monspan">ECONO_PRO</span> ?
      </h2>

      {/* a propos */}

      <div className="contenaire-apropos">
        <div className="enfnt1">
          <p>
            Notre application a été conçue pour être conviviale et intuitive.
            Vous pouvez commencer à suivre vos dépenses en quelques minutes,
            sans effort. <span className="monspan">ECONO_PRO</span> s'adapte à
            vos besoins financiers spécifiques. Créez des budgets personnalisés,
            définissez vos objectifs et suivez vos dépenses selon vos
            préférences.
          </p>
        </div>
        <div className="enfnt2">
          <div className="cadrevert">
            <img src={imag} />
          </div>
        </div>
      </div>
      <div className="contenaire-apropos">
        <div className="enfnt2">
          <div className="cadrevert">
            <img src={image} />
          </div>
        </div>
        <div className="enfnt1">
          <p>
            Vos données financières sont sécurisées avec nous. Nous utilisons
            des protocoles de sécurité avancés pour protéger vos informations
            personnelles. Avec <span className="monspan">ECONO_PRO</span>, nos
            utilisateurs économisent en moyenne [pourcentage ou montant] de plus
            chaque mois. Pourquoi ne pas faire partie de ces économies ?.
          </p>
        </div>
      </div>

      <div className="contenaire-apropos">
        <div className="enfnt1" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <p>
            Notre application a été conçue pour être conviviale et intuitive.
            Vous pouvez commencer à suivre vos dépenses en quelques minutes,
            sans effort. <span className="monspan">ECONO_PRO</span> s'adapte à
            vos besoins financiers spécifiques. Créez des budgets personnalisés,
            définissez vos objectifs et suivez vos dépenses selon vos
            préférences.
          </p>
        </div>
        <div className="enfnt2">
          <div className="cadrevert">
            <img src={imge} />
          </div>
        </div>
      </div>

      <h2 className="title-service" id="nosservice">
        Nos Services
      </h2>
      <div className="contenair-service">
        <div className="enf1">
          <span className="material-symbols-outlined">payments</span>
          <h2>Gestion des Revenus</h2>
          <p>
            Permettre aux utilisateurs d'enregistrer leurs revenus, salaires,
            etc., pour obtenir une vue d'ensemble complète de leurs finances.
          </p>
        </div>
        <div className="enf2">
          <span className="material-symbols-outlined">category</span>
          <h2>Création de Budgets </h2>
          <p>
            Offre aux utilisateurs la possibilité de définir des budgets pour
            différentes catégories de dépenses, tels que l'alimentation, le
            logement, les loisirs, etc.  
          </p>
        </div>
        <div className="enf3">
          <span className="material-symbols-outlined">notifications_active</span>
          <h2>Alertes et Notifications</h2>
          <p>
            Permettre aux utilisateurs de configurer des alertes pour être
            informés lorsque leurs dépenses dépassent certaines limites ou
            lorsqu'ils atteignent des jalons financiers
          </p>
        </div>
      </div>

      <h2 className="title-service" id="contact">
        Nous Contacter
      </h2>

      <div className="contenair-contact">
        <div className="enf1">
          <div>
            <span className="material-symbols-outlined">pin_drop</span>
            <p>
              Localisation:
              <br />
              Abidjan, Angré Gestoci
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined">stacked_email</span>
            <p>
              Email:
              <br />
              <span>econopro@gmail.com</span>
            </p>
          </div>

          <div>
            <span className="material-symbols-outlined">phone_iphone</span>
            <p>
              Téléphone:
              <br />
              +225 07 88 57 13 46
            </p>
          </div>
        </div>

        <div className="enf2">
          {/* formulaire contact*/}
          <form className="form">
            <div className="flex">
              <label>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  required=""
                />
                <span>Nom</span>
              </label>

              <label>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  required=""
                />
                <span>Prénoms</span>
              </label>
            </div>

            <label>
              <input
                className="input"
                type="email"
                placeholder=""
                required=""
              />
              <span>Adresse Email</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required="" />
              <span>Sujet</span>
            </label>
            <label>
              <input
                className="input"
                type="text"
                placeholder=""
                required=""
                id="inputmessage"
              />
              <span>Message</span>
            </label>
            <button className="submit">Envoyer</button>
          </form>
        </div>
      </div>
      
      <Footer/>
     </div>
  
    </>
  );
}
export default PageAccueil;
