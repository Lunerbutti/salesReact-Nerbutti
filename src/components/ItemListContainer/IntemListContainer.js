import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../mock/products";
import { useParams } from "react-router-dom";
    
  

    const Items = () => {

    const [productos, setProductos] = useState([]);
      
    const { categoria } = useParams();

    
    
        return (
          <>
            {
            productos.length ? <ItemList productos={productos} /> : <h3>Productos</h3>  
            }
          </>
        );
      };
      export default Items;
      