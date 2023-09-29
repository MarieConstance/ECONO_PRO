import React from "react";
import "../../Style/SaisirDepense.css";
import SideBar from "./Sidebar";


function SaisirDepense() {
  
  return (
    <div className="espace-dashboard">
      <SideBar />
      <div className="corpsdashbord">
        {/* ------formulaire------------- */}
        <h2>Formulaire de saisir des dépenses</h2>
        <form  className="row g-3"  >
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Montant
            </label>
            <input type="number" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Date
            </label>
            <input type="date" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Catégorie
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Alimentation</option>
              <option value="1">Logement</option>
              <option value="2">Transport</option>
              <option value="3">Divertissement</option>
              <option value="3">Voyages</option>
              <option value="3">Santé</option>
              <option value="3">Éducation</option>
              <option value="3">Vêtements </option>
            </select>
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Méthode de Paiement
            </label>
            <select className="form-select"  aria-label="Default select example">
              <option selected>Carte de Crédit</option>
              <option value="1">Espèces </option>
              <option value="2">Chèque</option>
              <option value="3">Débit Direct</option>
              <option value="3">Paiement Mobile </option>
            </select>
          </div>
          <div className="col-md-6">
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          </div>
          <div className="divbtn">
            <button type="submit" className="btn2">
              Enregistrer
            </button>
            <button type="submit" className="btn3">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SaisirDepense;
