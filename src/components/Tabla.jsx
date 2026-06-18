
function Tabla(){

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
          <td>nombre producto</td>
          <td>categoria</td>
          <td>cantidad</td>
          <td>precio unitario</td>
          <td>total</td>
          <td><div class="buttons">
              <button class="button is-info is-small">Editar</button>
              <button class="button is-danger is-small">Borrar</button>
              </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
)}
export default Tabla;