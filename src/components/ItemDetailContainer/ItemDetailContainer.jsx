import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemList from "../ItemList/ItemList";
import { useParams, } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';


const Items = () => {

    const {id} = useParams ()

    const [item, setItem] = useState();
   
    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            setItem(result)
            
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(() => {
        getSelected(id)
    
    }, [id]);

    return (

        <>
        {        
        item ? <ItemDetail item={item} setItem={setItem}/> : <h3>Cargando...</h3>
        }
        </>
    )
}

export default Items;

