import React from "react";
import { useState, useEffect} from 'react';


function EscuelaDashboard(props) {
  const [escuelas, setEscuelas] = useState([]);
  
  useEffect (() => {
  
    fetch("https://seagull-surfing.onrender.com/escuelas")
     .then(response => {return response.json()})
    .then(data => {
      console.log(data); 
      setEscuelas(data.data)
    })
  }, [])
 

  return (
    <div>
      <h3>ESCUELAS DE SURF</h3>
      <br/>
      <p>Cargando...</p>
      <br />
      <div>
        {escuelas.map((escuela) => (
          <div key={escuela.id}>
            <h4>{escuela.nombre}</h4>
            <p>{escuela.descripcion}</p>
            <img src={escuela.imagen} alt={escuela.nombre} height={200} />

            <p className='info'>Email:</p> <p> {escuela.email}</p>
            <p className='info'>Página web:</p> <p>{escuela.pagina_web}</p>
            <p className='info'>Teléfono:</p> <p> {escuela.telefono}</p>
            <p className='info'>Ubicación:</p> <p>{escuela.ubicacion}</p>
            <p className='info'>Estado: </p> <p>{escuela.estado}</p>
            
            <br/>
          </div>
        ))}
      </div>
    </div>
 
  );
}

export default EscuelaDashboard;