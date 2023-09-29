import React from "react";
import "../../Style/SaisirDepense.css";
import SideBar from "./Sidebar";
// import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
// import { apiUrl } from "../../API/config/env";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

function SaisirDepense() {
  // const navigate = useNavigate();
  // const { depense, handleSubmit,watch } = useForm(
  //   {
  //     montant:"",
  //     date:"",
  //     categorie:"",
  //     modepaiement:"",
  //     description:"",  
  // }
  // );
  // const loge = async (data) => {
    
  //     const response = await axios.post(`${apiUrl}/api/enregistrerDepense`, data);
  //     console.log(response.data);
  //     return response 
     
  //   } 
  //   const {mutate:enregistrer} = useMutation({
  //     mutationFn: (data)=>loge(data),
  //     onSuccess: (suces)=>{
  //         console.log(suces);
  //         navigate("/Tableaubord")
  //     },
  //     onError:(e)=>{
  //         console.log(e);
  //     }
  // })
  // const onSubmit = (data)=> enregistrer(data);
  return (
    <div className="espace-dashboard">
      <SideBar />
      <div className="corpsdashbord">
        {/* ------formulaire------------- */}
        <h2>Formulaire de saisir des dépenses</h2>
        <form  className="row g-3" onSubmit={handleSubmit(onSubmit)} >
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Montant
            </label>
            <input type="number"  {...register("montant", { required: true })} className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Date
            </label>
            <input type="date"  {...register("date", { required: true })} className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Catégorie
            </label>
            <select className="form-select"  {...register("categorie", { required: true })} aria-label="Default select example">
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
            <select className="form-select"  {...register("modepaiement", { required: true })} aria-label="Default select example">
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
            <textarea className="form-control"  {...register("description", { required: true })} id="exampleFormControlTextarea1" rows="3"></textarea>
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
