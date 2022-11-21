import React from "react";
import { useCartContext } from "../Context/CartContesxt";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {cart, removeItem, totalPrice} = useCartContext ();
  return cart.length === 0 ? (
   
     <h3>There is not product in the cart, may click 
      <button><Link to="/">HERE</Link></button>
     </h3>
  ) : (
<div>
  {cart.map((listaProducto) => (
    <table className="table table-hover table-position" key={listaProducto.id}>
    <tbody className="tbody">
      <tr>
        <td scope="row"> Cantidad: {listaProducto.quantity}</td>
        <td> {listaProducto.nombre}</td>
        <td> $ {listaProducto.precio}</td>
        <td className="img-container"> <img className="imgCart" src={listaProducto.img}/></td>
        <td>
          <button className="btn btn-outline-secondary" onClick={() => removeItem(listaProducto.id)}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
    </table>
  ) )}
  <div className="price-position">
    <h4>Precio total: {totalPrice().toLocaleString()}</h4>
    <Link to="/checkout">
      <button className="btn btn-lg btn-dark mt-2 ">
        Confirmar Compra
      </button>
    </Link>
  </div>
</div>
);
};
export default Cart