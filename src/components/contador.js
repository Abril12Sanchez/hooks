import { useState } from "react";



export function Contador(){
    // para cambiar
    const [count, setCount]=useState(0);
    function avanzar(){
        setCount(count+1);
    }

    return(
        <>
            <div>El contador es: {count}</div>
            <button onClick={avanzar}>Incrementar contador</button>
        </>
    )

}