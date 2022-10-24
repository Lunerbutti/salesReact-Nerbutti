import React, {useEffect, useState} from "react";
import { ItemList } from "../ItemList/ItemList";
// import { Productos } from "../../mock/Products";
// import Items from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
    
const productos = [

  {
      id: 1,
      nombre: "Delux",
      marca: "Nike",
      precio: 10000,
      stock: 5,
      categoria: "Sport wear",
      descripcion: "Delux sigue siendo nuestra zapatilla más probada. Todavía diseñado para mantenerte en marcha. El Nike React Infinity Run 3 te brinda una sensación suave y estable para una experiencia de carrera fluida tanto en carreras largas como cortas.",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/32da54aa-4131-4107-80dc-0df49ff127e2/air-zoom-pegasus-38-hardloopschoen-heren-5HVSDm.png"

  },
  {
      id: 2,
      nombre: "Pegasus",
      marca: "Nike",
      precio: 15000,
      stock: 7,
      categoria: "Sport wear",
      descripcion: "Las Nike Pegasus Trail 3 ofrecen una gran comodidad, con un diseño que combina con el aspecto clásico de Pegasus. Nike React foam zorgt para amortiguación sensible.",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f1422d49-453d-4bc3-9cab-357516d08d81/pegasus-trail-3-trailrunningschoen-heren-sgKPTr.png"

  },
  {
      id: 3,
      nombre: "Goodplace",
      marca: "Nike",
      precio: 14000,
      stock: 3,
      categoria: "Sport wear",
      descripcion: "El camino es tu pista. Alcanza nuevas alturas con este caballo de batalla alado. Espalda con rebote extra que es perfecta para correr en la calle.",
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b69d1007-7a39-46bd-8236-42a002dc8326/air-zoom-tempo-next-hardloopschoenen-heren-7kzrjk.png"
  },
  {
      id: 4,
      nombre: "Holalou",
      marca: "H",
      precio: 13000,
      stock: 4,
      categoria: "Casual wear",
      descripcion: "men,s jean casual wear",
      img: "https://http2.mlstatic.com/D_NQ_NP_637588-MLA49328528400_032022-W.jpg"
  },
  {
      id: 5,
      nombre: "ZoomX",
      marca: "H",
      precio: 11000,
      stock: 10,
      categoria: "Casual wear",
      descripcion: "men tshirt black and full color",
      img: "https://img.bestdealplus.com/ae04/kf/Hc86f401aebae4800abfe2bc0bfed99b7B.jpg"
  },
  {
      id: 6,
      nombre: "night",
      marca: "H",
      precio: 15000,
      stock: 9,
      categoria: "Casual wear",
      descripcion: "transparent t-shirt avant gard",
      img: "https://ae01.alicdn.com/kf/S79058fe6d9a84d9c913174ad6e42476dk/Camiseta-de-manga-corta-con-estampado-3D-para-hombre-ropa-de-calle-con-estampado-de-m.jpg_640x640.jpg"
  },
  {
      id: 7,
      nombre: "Slip",
      marca: "H",
      precio: 5000,
      stock: 7,
      categoria: "Underwear",
      descripcion: "versalles slip for men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22ELXIaL5xIwJN-ksaBXkMN5NJXfLMqLS3d1h3Wo5F_lneTDkcsF-ehUQnZbS6S_hFZM&usqp=CAU"
  },
  {
      id: 8,
      nombre: "boxer",
      marca: "H",
      precio: 8000,
      stock: 3,
      categoria: "Underwear",
      descripcion: "boxer for men",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nHk89pmAQXat8FUH_GQbX3SHq6cOWp8N-A&usqp=CAU"
  },
  ]

  const getData = new Promise(resolve => {
    setTimeout(() => {resolve (productos);}, 2000);
  });

    function ItemListContainer () {
    const { id } = useParams();
      console.log(id);  
    const [data, setData] = useState([]);
      
    // const { categoria } = useParams();
  
     
    useEffect(() => {
        getData
        .then ((data)=>{
         if (id){
          setData(data.filter(productos =>productos.categoria === id ))
        }else {
          setData (data)
        }
        
        })
    
        .catch ((error) =>{
          console.log("error");
        })
    }, [id])
    
        return (
          <div>
            
            <ItemList data={data} />  
            
          </div>
        );
      };
      export default ItemListContainer;
      