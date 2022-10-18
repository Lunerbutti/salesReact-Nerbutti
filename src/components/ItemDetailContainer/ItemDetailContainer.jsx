import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
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
        item ? <ItemDetail item={item} setItem={setItem}/> : <h1>Cargando...</h1>
        }
        </>
    )
}

export default Items;

