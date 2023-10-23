import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <br/>
                <li><NavLink to="/escuelas" >Escuelas</NavLink></li> 
                <br/>
                <li><NavLink to="/escuelaDetalle" >Escuela Detalle</NavLink></li>
                <br/>
                <li><NavLink to="/productos" >Productos</NavLink></li>
                <br/>
                <li><NavLink to="/productoDetalle" >Producto Detalle</NavLink></li>
               
            </ul>
        </div>
    );
}

export default Sidebar;