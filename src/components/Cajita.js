import React from "react";
import { useState, useEffect} from 'react';

function Cajita(props) {
let estado = useState("");
let setestado = estado[1];
let valorestado = estado[0];

useEffect (() => {

  const apiUrl = `http://localhost:3002/${encodeURIComponent(props.parametro)}`;
  fetch(apiUrl)
  // fetch('http://localhost:3002/escuelas/') 
  .then(response => {return response.json()})
  .then(data => {
    console.log(data); 
   setestado(data.total)
  })
}, [])

  return (
    <div className='tiulocajita'> 
    <h2> Total Registros de {props.titulo}</h2>
    <br/>
    <h3>Total: { valorestado}</h3>
    <br/>
    </div>
    
    );
}


export default Cajita;