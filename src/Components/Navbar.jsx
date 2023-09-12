import React from "react";
import "../Style/navbar.css";
import logo from "../assets/MonLogo.png"

function Navbar() {
  return (
    <header>
      <a href="#" className="logo">
        <img src={logo}/>
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li>
          <a href="#" className="Acceuil-active">
            Acceuil
          </a>
        </li>
        <li>
          <a href="#">A propos</a>
        </li>
        <li>
          <a href="#">Nos services</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <div className="part">
        <a href="#" className="btn">
          Se connecter
        </a>
        <a href="#" className="btn1">
          S'inscrire
        </a>
      </div>
    </header>
  );
}
export default Navbar;
