import React from "react";
import "../Style/navbar.css";
import logo from "../assets/MonLogo.png"
import { Link } from "react-router-dom";

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
          <a href="#monapropos">A propos</a>
        </li>
        <li>
          <a href="#nosservice">Nos services</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
      <div className="part">
        <Link to= "/Login" className="btn">
          Se connecter
        </Link>
        <a href="#" className="btn1">
          S'inscrire
        </a>
      </div>
    </header>
  );
}
export default Navbar;
