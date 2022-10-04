import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className="iconCart">
        <ShoppingCartIcon color="success" fontSize="large"/>
        </div>
    )
}

export default CartWidget