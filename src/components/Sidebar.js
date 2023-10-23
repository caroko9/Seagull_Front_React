import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <br/>
                <li><NavLink to="/escuelas" >Total Escuelas</NavLink></li> 
                <br/>
                <li><NavLink to="/escuelaDetalle" >Escuela Detalle</NavLink></li>
                <br/>
                <li><NavLink to="/productos" >Total Productos Productos</NavLink></li>
                <br/>
                <li><NavLink to="/productoDetalle" >Producto Detalle</NavLink></li>
                <br/>
                <li><NavLink to="/productoCategoria" >Categoría de Productos</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;