import React from "react";

export const EventComponent = () => {

    const callback = (event) =>{
        console.log(event)
    };
    return (
        <>
            <h3>NewEvent</h3>
            <button onClick={callback}>click</button>
        </>
    );
}
