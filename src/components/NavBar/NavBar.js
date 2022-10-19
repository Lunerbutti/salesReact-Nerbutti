import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
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