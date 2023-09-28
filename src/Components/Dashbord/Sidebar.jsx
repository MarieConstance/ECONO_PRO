import React from "react";
import "../../Style/Sidebar.css";
import "../../Style/Sidebar.css";
import { BiSolidTachometer } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FcStatistics } from "react-icons/fc";
import {
  AiFillCreditCard,
  AiFillStar,
  AiTwotoneSetting,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

function SideBar() {
  return (
    <div>
      <div className="Sidebar">
        <div className="lago"></div>
        <ul className="manu">
          <li className="active">
            <a href="#">
              <BiSolidTachometer className="ice" />
              <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#">
              <CgProfile className="ice" />
              <span> Dépenses</span>
            </a>
          </li>

          <li>
            <a href="#">
              <FcStatistics className="ice" />
              <span> Budget</span>
            </a>
          </li>

          <li>
            <a href="#">
              <AiFillCreditCard className="ice" />
              <span>Alerte</span>
            </a>
          </li>

          <li>
            <a href="#">
              <BsFillQuestionOctagonFill className="ice" />
              <span>Rapport</span>
            </a>
          </li>

          <li>
            <a href="#">
              <AiFillStar className="ice" />
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
            <a href="#" className="logout">
              <BiLogOut className="ice" />
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="main--content">
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
      </div>
    </div>
  );
}
export default SideBar;
