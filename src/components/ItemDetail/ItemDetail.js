import React, { useState } from "react";
import "./ItemDetail.css";
// import { Productos } from "../../mock/Products";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContesxt";
import Item from "../Item/Item";

const ItemDetail = ({ listaProducto, setListaProducto}) => {

    console.log(listaProducto)
  const [showCount, setShowCount] = useState(true);
  const {addItem} = useCartContext()

  const onAdd = (quantity) => {
    setShowCount(false);
    addItem(listaProducto, quantity);

    listaProducto.stock = listaProducto.stock  - quantity;
  };


  return (
    <div className="vistaProducto">
       <img className="imgProducto" alt= {listaProducto.titulo} src= {listaProducto.img}/>
       <div>
       <h1 className="nombreProducto">{listaProducto.nombre}</h1>
       <br/>
       <br/>
       <span className="descripcionProducto">{listaProducto.descripcion}</span>
       <h2 className="precioProducto">$ {listaProducto.precio}</h2>
       <p className="descripcionProducto">Stock: {listaProducto.stock}</p>
       
       {showCount ? (
       <ItemCount stock={listaProducto.stock} onAdd={onAdd}/>) : (
       <Link to={"/cart"}>
        <button className="btn btn-lg btn-warning">Shop Now</button>
       </Link>
       
       )} 
       <Link to="/" className="btn btn-lg btn-outline-success descripcionProducto">Shopping</Link>
       </div>
    </div>
  );
};

export default ItemDetail;
