import React, { useState, useEffect } from 'react';

function ProductoCategoria() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState({});


  useEffect(() => {
    fetch('http://localhost:3002/productos')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.data);
        countProductosPorCategoria(data.data);
      })
  }, []);

  const countProductosPorCategoria = (data) => {
    const categoriasContadas = {};
    data.forEach((producto) => {
      const categoria = producto.categoria;
      if (categoriasContadas[categoria]) {
        categoriasContadas[categoria] += 1;
      } else {
        categoriasContadas[categoria] = 1;
      }
    });
    setCategorias(categoriasContadas);
  
  };

  return (
    <div className='categorias'>
        <div>
          <h3>TOTAL DE PRODUCTOS POR CATEGORÍA:</h3>
          <ul>
            {Object.entries(categorias).map(([categoria, cantidad]) => (
              <li className='categoria' key={categoria}>
                {categoria}: {cantidad}
              </li>
            ))}
          </ul>
        </div>

    </div>
  );
}

export default ProductoCategoria;
