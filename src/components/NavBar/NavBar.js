import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return 
    <>
    <div>
        <button>New inn</button>
        <button>Casual wear</button>
        <button>Sport wear</button>
        <button>Under wear</button>
    </div>
    <CartWidget/>
    </>
}

export default NavBar