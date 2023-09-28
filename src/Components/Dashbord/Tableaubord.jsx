import React from "react";
import "../../Style/Dashboard.css";
// import SideBar from "./Sidebar";

function Dashbord() {
  return (
   <>
   <div className="espace-dashboard">
   {/* <SideBar/> */}
   <div className="corpsdashbord">
     <div className="div-header"></div>
     <div className="div-second"></div>
     <div className="cadre-affichache">
         <div className="enfant1">
             <div className="enfant1-affiche">
                 <h3>Dépenses effectuées</h3>
                 <span className="material-symbols-outlined" id="icons">
                 payments
                 </span>
             </div>
             <h2>1.800.500</h2>
         </div>
         <div className="enfant1">
             <div className="enfant1-affiche">
                 <h3>Budget Total</h3>
                 <span className="material-symbols-outlined" id="icons">
                     account_balance_wallet
                 </span>
             </div>
             <h2>2.000.000</h2>
         </div>

         <div className="enfant1">
             <div className="enfant1-affiche">
                 <h3>Catégories</h3>
                 <span className="material-symbols-outlined" id="icons">
                     category
                 </span>
             </div>
             <h2>08</h2>
         </div>

         <div className="enfant1">
             <div className="enfant1-affiche">
                 <h3>Total Alerte</h3>
                 <span className="material-symbols-outlined" id="icons">
                     notifications_active
                 </span>
             </div>
             <h2>12</h2>
         </div>
      </div>
      {/* ----------------tableau --------------------*/} 
      <h2 className="title-table">Liste des activités Hebdomadaire</h2>
      <table className="table table-hover">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        <thead>
         <tr>
           <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
           <th scope="col">Handle</th>
         </tr>
       </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td >Larry the Bird</td>
            <td>Otto</td>
            <td>@twitter</td>
          </tr>
        </tbody>
 </table>
     </div>
         
 </div>    
 
   </>
  )
}
export default Dashbord;