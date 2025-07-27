import FilaProductoTabla from "./FilaProductoTabla";
import { Table, Button } from "react-bootstrap";
import juegosPrueba from "../../../data/juegosPrueba";
import { Link } from "react-router";

let cargar = true;

const TablaJuegos = ({juegos, setJuegos,cargarJuego,borrarProducto}) => {

  const cargarJuegosPrueba = () => {
    if (cargar) {
        setJuegos(juegosPrueba)
        cargar = false;
      }
    }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="fs-4">Tabla de Juegos</h1>
        <div>
          <Link to={"/formulario-producto"} className="btn btn-primary me-2">
            <i className="bi bi-file-earmark-plus"></i>
          </Link>
          <Button variant="info" onClick={cargarJuegosPrueba}>
            <i className="bi bi-database-fill-up"></i>
          </Button>
        </div>
      </div>
      <hr />
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            juegos.map((juego, index) => <FilaProductoTabla key={index} juego = {juego} setJuegos = {setJuegos} borrarProducto={borrarProducto}></FilaProductoTabla>)
          }
        </tbody>
      </Table>
    </>
  );
};

export default TablaJuegos;
