import React from "react";
import { useState, useEffect} from 'react';


function EscuelaDashboard(props) {
  const [escuelas, setEscuelas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect (() => {
  
    fetch("https://seagull-surfing.onrender.com/escuelas")
     .then(response => {return response.json()})
    .then(data => {
      const primeras10Escuelas = data.data.slice(0, 10); //Filtro para que muestre solo las primeras 10 Escuelas
      setEscuelas(primeras10Escuelas);
      setLoading(false);
    })
  }, [])
 

  return (
    <div>
      <h3>TOP 10 DE NUESTRAS ESCUELAS DE SURF</h3>
      <br/>
      {loading ? ( // Si loading es true, muestra un mensaje de carga
        <p>Cargando...</p>
      ) : (
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
           )}
    </div>
   );
}

export default EscuelaDashboard;