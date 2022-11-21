import React from "react";
import logoH from '../img/logoH.jpg';
import './Header.css';
import Navbar from "../NavBar/Navbar";
import {Link, NavLink} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContesxt";



const Header = ({children}) =>{
    return(

      <useCartContext>
      <div className="headerNav">
        <header>
            <Link to="/"><img className="logo" src={logoH} alt="Logo Heredero" /></Link>   
            <h1>HEREDERO</h1>
        </header>
        <Navbar>
            <ItemCount/>
        </Navbar>

      </div>
      </useCartContext>)
}

export default Header;
