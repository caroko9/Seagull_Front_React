import React from "react";
import { useState, useEffect} from 'react';

function Cajita() {
let estado = useState("");
let setestado = estado[1];
let valorestado = estado[0];

useEffect (() => {
  fetch('http://localhost:3002/escuelas/') 
  .then(response => {return response.json()})
  .then(data => {
    console.log(data); 
   setestado(data.total)
  })
}, [])

  return (
    <div className='tiulocajita'>
    <h4>DETALLE</h4>
    <h5>{ valorestado}</h5>
    </div>
  );
}


export default Cajita;