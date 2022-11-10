import React, { useContext, useState } from "react";
import "./ItemDetail.css";
// import { Productos } from "../../mock/Products";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext, Context } from "../Context/CartContesxt";

const ItemDetail = ({ listaProducto}) => {

    console.log(listaProducto)
  const [showCount, setShowCount] = useState(true);
  const result = useContext(Context)

  const onAdd = (count) => {
    result.addItems(listaProducto, count)

    setShowCount(false);
  };


  return (
    <div className="vistaProducto">
       <img className="imgProducto" alt= {listaProducto.titulo} src= {listaProducto.img}/>
       <div>
       <h1 className="nombreProducto">{listaProducto.nombre}</h1>
       <span className="descripcionProducto">{listaProducto.descripcion}</span>
       <h2 className="precioProducto">{listaProducto.Precio}</h2>
       {showCount ? (
       <ItemCount stock={listaProducto.stock} initial={1} onAdd={onAdd}/>) : (
       <Link to={'/cart'}>
        <button className="btn btn-success buttonShop">Shop Now</button>
       </Link>
       
       )} 
       </div>
    </div>
  );
};

export default ItemDetail;
