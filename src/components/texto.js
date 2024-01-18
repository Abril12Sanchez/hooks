import { useState } from "react";
import "../styles.css";

export function Texto(){
   
    
    // var texto="Encendido";
    let modos=["Apagado", " Encendido 10%","Encendido 20%","Encendido 30%", "Encendido 40%","Encendido 50%", 
    "Encendido 60%", "Encendido 70%", "Encendido 80%", "Encendido 90%", "Encendido al 100%"];
    // var modo=modos[0];
    var [texto, setTexto]=useState(0)
// incrementa, decrementa y recetea

// function switch2(){
//     if(texto==="Encendido"){
//         setTexto("Apagado")
//     }else{
//         setTexto("Encendido")
//     }

// }

    function aumentar(){
        // setTexto("si");
        // for (let i = 0; i < modos.length; i++) {
        //     // var modo=modos[i];
        //     setTexto(modos[i]);
        // }
        setTexto((prevIndice) => (prevIndice + 1) % modos.length);
    }

    function regresar(){
        // for(let i = modos.length - 1; i >= 0; i--) {
        //    var  modo=modos[i];
        //     console.log(modo);
        //     setTexto(modo);
        // }
        setTexto((prevIndice) => (prevIndice - 1 + modos.length) % modos.length);
    
    }

    function reset(){
        setTexto(0);
    }

    return(
        <><>
        <div className="cont">
            <h1 style={{fontSize:"80px"}}>💡</h1>
          <div className="texto">{modos[texto]}</div>
          <div className="botones-container">
            <button className="butt" onClick={aumentar}> + </button>
            <button className="butt" onClick={regresar}> - </button>
            <button className="butt" onClick={reset}>Reset</button>
          </div>
        </div>
      </>
      
        </>
    )
}