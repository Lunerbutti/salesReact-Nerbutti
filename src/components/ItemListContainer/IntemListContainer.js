import React, {useEffect, useState} from "react";
// import Count from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
    
    // const onAdd = (shop) =>{
    // console.log(`user shop ${shop} product`);
    // };

    // const obtenerProductos = new Promise((resolve, reject)=>{
    //     setTimeout(() => {resolve(productos);},2000);
    // })

    const Items = () => {

        const [productos, setProductos] = useState([]);
      
        // const { categoria } = useParams();
      
      
        // const getData = async (categoria) => {
        //   try {        
        //   const document = categoria? query(collection(db, "Items"),where("categoria", "==", categoria)) : collection(db, "Items")
        //   const col = await getDocs(document)
        //   const result = col.docs.map((doc) => doc ={id:doc.id,...doc.data()})
        //   setProductos(result)
        // } catch (error) {
        //     console.log(error)
        // }
        // }
      
        // useEffect(() => {
        //   getData(categoria) 
        // }, [categoria]);
      
        return (
          <>
            {
            productos.length ? <ItemList productos={productos} /> : <h1>Cargando...</h1>  
            }
          </>
        );
      };
      export default Items
      