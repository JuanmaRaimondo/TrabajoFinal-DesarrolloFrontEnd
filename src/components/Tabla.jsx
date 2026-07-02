

function Tabla({ productos, eliminarProducto, editarProducto }) {

  return (
    <div className="table-container"> 
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Precio Unitario $</th>
            <th>Total</th>
            <th>Acciones</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          
          {productos && productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre || producto.producto}</td>
              <td>{producto.categoria}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.preciounitario}</td>
              <td>{producto.preciounitario * producto.cantidad}</td>
              <td>
                <div className="buttons">
                  <button 
                    className="button is-info is-small" 
                    onClick={() => editarProducto(producto)}
                  >
                    Editar
                  </button>
                  <button 
                    className="button is-danger is-small" 
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Borrar
                  </button>
                </div>
              </td>
              <td>{producto.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Tabla;