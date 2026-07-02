import React from 'react';

function Formulario({ guardarProducto, productoaEditar }) {
  const [categoria, setCategoria] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');
  const [fecha, setFecha] = useState('');
  
  useEffect(() => {
    if (productoAEditar) {
      setCategoria(productoAEditar.categoria);
      setProducto(productoAEditar.producto);
      setCantidad(productoAEditar.cantidad);
      setPreciounitario(productoAEditar.preciounitario);
      setFecha(productoAEditar.fecha || '');
    } else {
      
      setCategoria('');
      setProducto('');
      setCantidad('');
      setPreciounitario('');
      setFecha('');
    }
  }, [productoAEditar]);

  const manejarEnvio = (e) => {
    e.preventDefault();

  const datosProducto = {
      categoria,
      producto,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
      fecha
    };

    
    guardarProducto(datosProducto);
  };

  return (
    <div className="box">
      <h3 className="title is-4 mb-4">
        {esEdicion ? 'Editar Producto' : 'Nuevo Producto'}
      </h3>
      
      <form onSubmit={ProcesarFormularios}>
        
        {/*combo de categorías */}
        <div className="field">
          <label className="label">Categoría</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select name="categoria" required>
                <option value="">Selecciona una categoría...</option>
                <option value="Limpieza">Limpieza</option>
                <option value="Comestibles">Comestibles</option>
                <option value="Bebidas">Bebidas</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
          </div>
        </div>

        {/* producto*/}
        <div className="field">
          <label className="label">Producto</label>
          <div className="control">
            <input 
              className="input" 
              type="text" 
              name="producto" 
              placeholder="Ej. Detergente, Fideos..." 
              required 
            />
          </div>
        </div>

        {/* cantidad */}
        <div className="field">
          <label className="label">Cantidad</label>
          <div className="control">
            <input 
              className="input" 
              type="number" 
              name="cantidad" 
              placeholder="0" 
              min="1" 
              required 
            />
          </div>
        </div>

        {/* precio Unitario */} 
        <div className="field">
          <label className="label">Precio Unitario ($)</label>
          <div className="control">
            <input 
              className="input" 
              type="number" 
              name="precioUnitario" 
              placeholder="0.00" 
              step="0.01" 
              min="0.01" 
              required 
            />
          </div>
        </div>

        <div className="field mt-5">
          <div className="control">
            <button 
              type="submit" 
              className={`button is-fullwidth ${esEdicion ? 'is-warning' : 'is-success'}`}
            >
              {esEdicion ? 'Aceptar' : 'Agregar'}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default Formulario;