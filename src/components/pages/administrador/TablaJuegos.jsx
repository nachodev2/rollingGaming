import FilaProductoTabla from "./FilaProductoTabla";
import { Table, Button } from "react-bootstrap";

const TablaJuegos = ({ cargarJuegos }) => {

  const cargarJuegosPrueba = () => {
    cargarJuegos()
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="fs-4">Tabla de Juegos</h1>
        <div>
          <Button className="btn btn-primary me-2">
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          <Button variant="info">
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
            <th>Categoria</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <FilaProductoTabla></FilaProductoTabla>
          <FilaProductoTabla></FilaProductoTabla>
          <FilaProductoTabla></FilaProductoTabla>
        </tbody>
      </Table>
    </>
  );
};

export default TablaJuegos;
