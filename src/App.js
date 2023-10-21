import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Cajita from '../src/components/Cajita';
import EscuelaDashboard from '../src/components/EscuelaDashboard';
import Producto from '../src/components/Producto';
import ProductoDashboard from '../src/components/ProductoDashboard';
import Navbar from '../src/components/Navbar';
import Sidebar from '../src/components/Sidebar';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/escuelas" element={<Cajita />} />
          <Route path="/productos" element={<Producto />} />
          <Route path="/escuelaDetalle" element={<EscuelaDashboard />} />
          <Route path="/productoDetalle" element={<ProductoDashboard />} />

        </Routes>
      </div>
      </div>
    </Router>
  );
}
export default App;
