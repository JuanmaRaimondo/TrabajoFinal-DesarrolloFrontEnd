import { useState } from 'react'

import './App.css'
import Tabla from './components/Tabla';

function App() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Trabajo Final Desarrollo Front-End</h1>
        <p className="subtitle">Proyecto Almacén - Montero Santiago y Raimondo Juan Martin</p>
        
        <Tabla/>
        
      </div>
    </div>
  );
}

export default App
