import React from "react";
import SideBar from "./Sidebar";
import "../../Style/Alerte.css";

function Alerte() {
  return (
    <div className="espace-dashboard">
      <SideBar />
      <div className="corpsdashbord">
        <h1>Configuration des Alertes</h1>
        <form className="row g-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Limite
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPassword4"
              placeholder="En Fcfa"
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Fréquence
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Quotidien</option>
              <option value="1">Hebdomadaire</option>
              <option value="2">Mensuel</option>
            </select>
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
            Heure de l'Alerte
            </label>
            <input type="time" className="form-control" id="inputPassword4" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Activer l'alerte</label>
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
        <h3 className="listealerte">Liste des Alertes Configurées</h3>
      </div>
    </div>
  );
}
export default Alerte;
