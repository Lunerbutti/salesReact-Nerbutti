import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
    <div className="navbarStyle">
    <nav>
        <button>New in</button>
        <button>Casual wear</button>
        <button>Sport wear</button>
        <button>Under wear</button>
        <button>About Us</button>
    </nav>
    <CartWidget/>
    </div>
);}

export default Navbar;