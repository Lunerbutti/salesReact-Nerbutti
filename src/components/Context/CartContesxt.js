import React, {createContext, useState} from "react";
import { useEffect } from "react";



export const  Context = createContext();

console.log(Context); //{provider}

export const CartContext = ({children}) =>{
    const [updateCart, setUpdateCart] = useState([]);
    const [q, setQ] = useState(5);
    const [totAm, setTotAm] = useState(0);

    useEffect(() => {
        const cantP = 0;
        const montoTot = 0;
        updateCart.forEach(item => {
            cantP += item.cantidad;
            montoTot += ( item.cantidad * item.precio)

        });
        setQ(cantP)
        setTotAm(montoTot)
    }, [updateCart]);

    const addItems = (item, cantidad, id) =>{
        console.log(item);
        console.log(`Agrega ${cantidad} de producto ${item} al carrito`);
        setUpdateCart(updateCart.filter(item => item.id === id),
            
        );

    };

    const deleteItems = (id) =>{
        console.log("Elimina producto del carrito");
        setUpdateCart(updateCart.filter(item => item.id !== id),);

    };

    const clearItems = () =>{
        console.log("Vacia el carrito")
        setUpdateCart ([]);
        setQ(0);
        setTotAm(0);
    };

    const isInCart = (id) => updateCart.some(item => item.id === id);

    return (
        <Context.Provider value={{updateCart, q, totAm, clearItems, deleteItems, addItems }}>
        {children}
        </Context.Provider>

    )
};
