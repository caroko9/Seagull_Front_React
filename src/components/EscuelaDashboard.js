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
            <p>Email: {escuela.email}</p>
            <p>Página web: {escuela.pagina_web}</p>
            <p>Teléfono: {escuela.telefono}</p>
            <p>Ubicación: {escuela.ubicacion}</p>
            <p>Estado: {escuela.estado}</p>
            <img src={escuela.imagen} alt={escuela.nombre} width={300} height={200} />
            <br/>
          </div>
        ))}
      </div>
           )}
    </div>
   );
}

export default EscuelaDashboard;