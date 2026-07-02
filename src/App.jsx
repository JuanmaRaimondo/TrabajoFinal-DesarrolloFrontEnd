import { useState, useEffect } from 'react'

import './App.css'
import Tabla from './components/Tabla';


function App() {
   const [productos, setProductos] = useState([]); 

   useEffect(()=>{
    fetch('db.json')
              .then((response) => response.json())
              .then((data) => setProductos(data.productos))
              .catch((error) => console.error("Error en la API:", error));
   },[])
   
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Trabajo Final Desarrollo Front-End</h1>
        <p className="subtitle">Proyecto Almacén - Montero Santiago y Raimondo Juan Martin</p>
        
        <Tabla productos={productos} />
        
      </div>
    </div>
  );
}

export default App
