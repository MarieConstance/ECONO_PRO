import React, { useRef } from "react";
import "../Style/navbar.css";
import logo from "../assets/MonLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const nav = useRef(null);
  const toglle = (event) => {
    const close = document.getElementById("close");
    close.style.display = "block";
    close.addEventListener("click", (ev) => {
      nav.current.classList.remove("active");
      event.target.style.display = "block";
      ev.target.style.display = "none";
    });

    event.target.style.display = "none";

    nav.current.classList.toggle("active");
  };

  return (
    <header>
      <a href="#" className="logo">
        <img src={logo} />
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar" ref={nav}>
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
        <Link to="/Login" className="btn">
          Se connecter
        </Link>
        <a href="#" className="btn1">
          S'inscrire
        </a>
      </div>
      <span
        // onClick={() => {
        //   toglle();
        // }}
        onClick={toglle}
        className="material-symbols-outlined"
        id="burger"
      >
        lists
      </span>
      <span className="material-symbols-outlined" id="close">
        close
      </span>
    </header>
  );
}

export default Navbar;
