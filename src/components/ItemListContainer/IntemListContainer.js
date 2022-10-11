import React from "react";

const Items = () => {
    const greeting = "Wellcome, Heredero sale page will be soon";
    return (
    <body style={style.textItems}>    
    <Items message={greeting} style={style.showMessage} />
    </body>);
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