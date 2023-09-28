import React from "react";
import "../Style/Footer.css";

function Footer(){
    return(
        <footer>
            <div className="footerContenair">
            <div className="socialIcons">
                <a href=""><i className="fa-regular fa-envelope"></i></a>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <div className="footerNav">
            <ul>
                <li> <a href="#">Page d'Accueil</a></li>
                <li> <a href="#">A propos</a></li>
                <li> <a href="#">Service</a></li>
                <li> <a href="#"> Contact</a></li>
            </ul>
            </div>
           
            <div className="footerBottom">
                <p>Copyright <span className="span1">ECONO-PRO</span> &copy;2023 By <span className="span2">Marie Goa</span></p>
            </div>
        </div>
        </footer>
        
       
    )
}
export default Footer;