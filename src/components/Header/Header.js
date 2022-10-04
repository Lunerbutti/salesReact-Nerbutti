import React from "react";
import logoH from '../img/logoH.jpg';
// import fondo from '../img/fondoHeader.jpg';
import './Header.css';
import Navbar from "../NavBar/Navbar";

const Header = () =>{
    return(
      <div className="headerNav">
        <header>
            <img className="logo" src={logoH} alt="Logo Heredero" />   
            <h1>HEREDERO</h1>
        </header>
        <Navbar/>
      </div>)
}

export default Header;
