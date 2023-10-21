import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/escuelas" >Escuelas</NavLink></li> 
                <li><NavLink to="/escuelaDetalle" >Escuela Detalle</NavLink></li>
                <li><NavLink to="/productos" >Productos</NavLink></li>
                <li><NavLink to="/productoDetalle" >Producto Detalle</NavLink></li>
               
            </ul>
        </div>
    );
}

export default Sidebar;