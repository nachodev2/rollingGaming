import { Link } from "react-router";
import FilaUsuariosTabla from "./FilaUsuariosTabla";
import { Table, Button } from "react-bootstrap";
import usuariosPrueba from "../../../data/usuariosPrueba";

let cargar = true;
const TablaUsuarios = ({usuarios, setUsuarios, borrarUsuario}) => {
  const cargarUsuariosPrueba = () => {
    if (cargar) {
      setUsuarios(usuariosPrueba);
      cargar = false;
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="fs-4">Tabla de Usuarios</h1>
        <div>
          <Link className="btn btn-primary me-2" to={"/Registro"}>
            <i className="bi bi-person-add"></i>
          </Link>
          <Button variant="info" onClick={cargarUsuariosPrueba}>
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
          {usuarios.map((usuario, index) => (
            <FilaUsuariosTabla
              key={index}
              usuario={usuario}
              setUsuarios={setUsuarios}
              fila={index+1}
              borrarUsuario={borrarUsuario}
            ></FilaUsuariosTabla>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TablaUsuarios;
