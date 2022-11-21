import React from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import { useCartContext} from "../Context/CartContesxt";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalProducts, cart} = useCartContext();
    return  cart.length > 0 ? (
        <div className="iconCart">
        <Link to="/cart">
            <div className="icono">
                <ShoppingCartIcon color="success" fontSize="large" />
                <span className="number-icon icon">{totalProducts()}</span>
                </div>
        </Link>
        </div>
    ):(
        <div><ShoppingCartIcon color="success" fontSize="large" /></div>
    );
};

export default CartWidget