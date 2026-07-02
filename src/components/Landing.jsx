import React from "react";

function Landing(){
    return(
        <div className="hero is-fullheight is-link is-bold">
      <div className="hero-body">
        <div className="container has-text-centered"></div>
        <h2 className="title is-1 mb-5">Front Almacen</h2>
        <div className="buttons is-centered">
            <button className="button is-primary is-large mx-3" onClick={() => cambiarPantalla('tabla')}
            >
              Lista Productos
            </button>
            <button className="button is-success is-large mx-3" onClick={() => cambiarPantalla('formulario')}
            >
              Agregar producto
            </button>
        </div>
        </div>
        </div>
    );
}
export default Landing;