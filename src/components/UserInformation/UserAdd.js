import React,{useState} from "react";
import { UserList } from "./UserList";

export const Users = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [lista, setLista] = useState([]);

    const handlerChangeName = (e)=> {
        setNombre(e.target.value);
    }

    const handlerChangeApellido = (e)=> {
        setApellido(e.target.value);
    }
    const handlerChangeMail = (e)=> {
        setMail(e.target.value);
    }

    const userInfoAdd = [
        {
        Name: nombre,
        Apellido: apellido,
        Mail: mail,
        }]

    const handlerClick = ()=>{
        setLista([...lista,
            // nombre,apellido,mail
            userInfoAdd
        ]);
    }

    return(
        <div class="userAdd">
            <input type="text" value={nombre} onChange={handlerChangeName}/>
            <input type="text" value={apellido} onChange={handlerChangeApellido}/>
            <input type="text" value={mail} onChange={handlerChangeMail}/>
            <button onClick={handlerClick}>Agregar</button>
            {/* <UserList lista={lista}/> */}
        </div>
    )
}