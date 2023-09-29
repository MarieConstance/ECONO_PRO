import React from "react";
import SideBar from "./Sidebar";
import "../../Style/Budget.css";

function Budget() {
  return (
    <div className="espace-dashboard">
      <SideBar />
      <div className="corpsdashbord">
        <h1>Création de Budget Mensuel</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Mois
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Janvier</option>
              <option value="1">Février</option>
              <option value="2">Mars</option>
              <option value="3">Avril</option>
              <option value="3">Mai</option>
              <option value="3">Juin</option>
              <option value="3">Juillet</option>
              <option value="3">Aôut </option>
              <option value="3">Septembre </option>
              <option value="3">Octobre </option>
              <option value="3">Novembre </option>
              <option value="3">Décembre </option>
            </select>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Année
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>2023</option>
              <option value="1">2024</option>
              <option value="2">2025</option>
              <option value="3">2026</option>
              <option value="3">2027</option>
              <option value="3">2028</option>
              <option value="3">2029</option>
              <option value="3">2030 </option>
            </select>
          </div>
          <h5> Catégories de Dépenses:</h5>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Alimentation
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Logement
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Transport
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Divertissement
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Voyages
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Santé
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Éducation
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Vêtements
            </label>
            <input type="number" className="form-control" id="inputPassword4" />
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
export default Budget;
