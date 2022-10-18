import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
    <>
    <div className="navbarStyle">
    <nav>
        <button>New in</button>
        <button class= "nav-item dropdown nav-link dropdown-toggle">Casual wear
        </button>
        <button>Sport wear</button>
        <button>Underwear</button>
        <button>About Us</button>
    </nav>
    <CartWidget/>
    </div>
    </>
);}

export default Navbar;