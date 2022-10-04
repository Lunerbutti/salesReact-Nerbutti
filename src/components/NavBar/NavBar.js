import React from "react";
import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return 
    <>
    <nav>
        <button>New inn</button>
        <button>Casual wear</button>
        <button>Sport wear</button>
        <button>Under wear</button>
    </nav>
    <CartWidget/>
    </>
}

export default Navbar