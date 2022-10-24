import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import {link, navlink} from "react-router-dom"

const Navbar = ({children}) => {
    const categorias =[
    {nombre:"Casual wear", id : 0, ruta: "/categoria/Casual wear"},
    {nombre:"Sport wear", id: 1, ruta :"/categoria/Sport wear"},
    {nombre:"Underwear", id: 2, ruta:"/categoria/Underwear"},
    {nombre:"About Us", id: 3, ruta: "/categoria/About Us"},
    ]

    return (
    <>
    <div className="navbarStyle">
    <nav>
        <button class="btn">New in</button>
        <button class="btn" >Casual wear
        </button>
        <button class="btn">Sport wear</button>
        <button class="btn">Underwear</button>
        <button class="btn">About Us</button>
    </nav>
    <CartWidget/>
    </div>
    </>
);}

export default Navbar;