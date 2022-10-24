import React from "react";
import logoH from '../img/logoH.jpg';
import './Header.css';
import Navbar from "../NavBar/Navbar";
import {Link, NavLink} from "react-router-dom"


const Header = () =>{
    return(
      <div className="headerNav">
        <header>
            <Link to="/"><img className="logo" src={logoH} alt="Logo Heredero" /></Link>   
            <h1>HEREDERO</h1>
        </header>
        <Navbar/>
      </div>)
}

export default Header;
