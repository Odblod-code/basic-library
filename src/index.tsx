import React from 'react';
import ReactDOM from "react-dom/client";

export const Hello: React.FC<{ name: String }> = ({name}) => {
    if (!name) {
      name = 'Mundo';
    }
    return (<h1>¡¡Hola {name}!!</h1>)
}

const elementRef = document.getElementById("root");

if(elementRef) {
    const root = ReactDOM.createRoot(elementRef);
    root.render(<Hello name="saul"/>);
}