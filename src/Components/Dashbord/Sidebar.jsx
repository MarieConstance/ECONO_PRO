import React from "react";
import "../../Style/Sidebar.css";
import "../../Style/Sidebar.css";
import { BiSolidTachometer, BiSolidUserCircle } from "react-icons/bi";
import {FaMoneyBillWave} from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import {
    AiFillAlert,
  AiTwotoneSetting,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div className="Sidebar">
        <div className="lago"></div>
        <ul className="manu">
          <li className="active">
            <Link to="/Tableaubord">
              <BiSolidTachometer className="ice" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/SaisirDepense">
              <FaMoneyBillWave className="ice" />
              <span> Dépenses</span>
            </Link>
          </li>

          <li>
            <Link to="/Budget">
              <TbReportMoney className="ice" />
              <span> Budget</span>
            </Link>
          </li>

          <li>
            <Link to ="/Alerte">
              <AiFillAlert className="ice" />
              <span>Alerte</span>
            </Link>
          </li>

          <li>
            <a href="#">
              <BsFillQuestionOctagonFill className="ice" />
              <span>Rapport</span>
            </a>
          </li>

          <li>
            <a href="#">
              <BiSolidUserCircle className="ice" />
              <span>Profil</span>
            </a>
          </li>

          <li>
            <a href="#">
              <AiTwotoneSetting className="ice" />
              <span>Paramètre</span>
            </a>
          </li>

          <li>
            <Link to="/" className="logout">
              <BiLogOut className="ice" />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="main--content">
        <div className="head--wrapper">
          <div className="head--title">
            <span>Primary</span>
            <h2>Dashboard</h2>
          </div>
          <div className="user--info">
            <div className="searc--box">
              <AiOutlineSearch className="ko" />
              <input type="text" placeholder="Search" className="lui" />
            </div>
            <img alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default SideBar;
