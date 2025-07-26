import FilaUsuariosTabla from "./FilaUsuariosTabla";
import { Table, Button } from "react-bootstrap";


const TablaUsuarios = () => {
    return (
        <>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="fs-4">Tabla de Usuarios</h1>
        <div>
          <Button className="btn btn-primary me-2">
            <i className="bi bi-person-add"></i>
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
            <th>#</th>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <FilaUsuariosTabla></FilaUsuariosTabla>
          <FilaUsuariosTabla></FilaUsuariosTabla>
          <FilaUsuariosTabla></FilaUsuariosTabla>
          
        </tbody>
      </Table>
    </>
    );
};

export default TablaUsuarios;