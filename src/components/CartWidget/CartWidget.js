import React, {useContext} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import { Context} from "../Context/CartContesxt";

const CartWidget = () => {
    const { q } = useContext(Context);
    return (
        <div className="iconCart">
        <p className="shownumbber">{q}</p>   
        <div className="icono"><ShoppingCartIcon color="success" fontSize="large" /></div>
        </div>
    )
}

export default CartWidget