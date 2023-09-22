import React from "react";
import { Link } from "react-router-dom";
import "../../Style/SaisirDepense.css";

function SaisirDepense() {
  return (
    <div className="espace-dashboard">
      <div className="menu">
        <div className="monmenu">
          <div>
            <Link className="lien">
              <span class="material-symbols-outlined">home</span>Accueil
            </Link>
          </div>
          <div>
            <Link to="/SaisirDepense" className="lien" id="active">
              <span class="material-symbols-outlined">edit_note</span>Saisir
              Dépense
            </Link>
          </div>
          <div>
            <Link className="lien">
              <span class="material-symbols-outlined">
                account_balance_wallet
              </span>
              Définir un budget
            </Link>
          </div>
          <div>
            <Link className="lien">
              <span class="material-symbols-outlined">
                notifications_active
              </span>
              Alerte
            </Link>
          </div>
          <div>
            <Link className="lien">
              <span class="material-symbols-outlined">category</span>
              Catégorisation
            </Link>
          </div>
          <div>
            <Link className="lien">
              <span class="material-symbols-outlined">settings</span>Paramètre
            </Link>
          </div>
          <div>
            <Link className="lien">
              <span class="material-symbols-outlined">logout</span>Déconnexion
            </Link>
          </div>
        </div>
      </div>
      <div className="corpsdashbord">
        {/* ------formulaire------------- */}

        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputEmail4" class="form-label">
              Montant{" "}
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Date
            </label>
            <input type="date" className="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>

          <div class="col-12"></div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SaisirDepense;
