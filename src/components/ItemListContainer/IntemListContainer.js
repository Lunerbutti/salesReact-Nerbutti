import React from "react";

const Items = (props) => {
    console.log(props)
    return (
    <div style={style.textItems}>   
    <h2 style={style.showMessage}>{props.textInfo}</h2>
    </div>);
}

export default Items

const style = {
    textItems: {
        margin: 0,
        padding: 0,
        height: 300,
        backgroundColor: 'rgba(252, 255, 176, 0.974)',
    },
    showMessage: {
        color: "black",
        fontSize: 23,
    }
}