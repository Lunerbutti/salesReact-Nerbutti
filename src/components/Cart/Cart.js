import React, {useContext} from "react";
import { CartContext, Context } from "../Context/CartContesxt";
import { Link } from "react-router-dom";

const Cart = () => {
  const {CartContext} = useContext (Context);
  if (CartContext.length === 0) {
  return (
     <h3>There is not product in the cart, may click <link to="/">HERE</link>
     </h3>);
}
return (
  <>
  {CartContext.map((listaProducto) => (
    <h2 key={listaProducto.id}>{listaProducto.nombre}</h2>
  ) )}
  </>
);
};
export default Cart