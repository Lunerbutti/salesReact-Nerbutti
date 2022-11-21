import React, {useContext} from "react";
import { useCartContext, CartProvider } from "../Context/CartContesxt";
import { Link } from "react-router-dom";

const Cart = () => {
  const {useCartContext} = useCartContext (CartProvider);
  if (useCartContext.length === 0) {
  return (
     <h3>There is not product in the cart, may click <link to="/">HERE</link>
     </h3>);
}
return (
  <>
  {useCartContext.map((listaProducto) => (
    <h2 key={listaProducto.id}>{listaProducto.nombre}</h2>
  ) )}
  </>
);
};
export default Cart