
function Tabla(){

  export const TablaProd = ({productos, eliminarProducto, editarProducto}) => {

  }
  return (
    <div class="table-container"> 
      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
        <tr>
        <th>Producto</th>
        <th>Categoria</th>
        <th>Cantidad</th>
        <th>Precio Unitario $</th>
        <th>Total</th>
        <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{producto.nombre}</td>
          <td>{producto.categoria}</td>
          <td>{producto.cantidad}</td>
          <td>{producto.preciounitario}</td>
          <td>{producto.preciounitario * productos.cantidad}</td>
          <td><div class="buttons">
              <button class="button is-info is-small" onClick={()=>{
                editarProducto(producto)
              }} >Editar</button>
              <button class="button is-danger is-small onClick={()=>{
              eliminarProducto(producto.id)}} ">Borrar</button>
              </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
)}
export default Tabla;