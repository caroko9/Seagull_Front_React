import React, { useState, useEffect } from 'react';

function ProductoDashboard() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/productos')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.data);
      })
     }, []);

  return (
    <div>
      <h3>LISTADO DE PRODUCTOS</h3>
      <br/>
      <p>Cargando...</p>
      <br/>
      <div>
        {productos.map((producto) => (
          <div key={producto.id}>
            <h4>{producto.nombre}</h4>
            <p>{producto.descripcion}</p>
            <img src={producto.imagen} alt={producto.nombre} width={200} height={200} />
            <p>Precio: {producto.precio}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Fecha de Creación: {producto.fecha_creacion}</p>
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductoDashboard;
