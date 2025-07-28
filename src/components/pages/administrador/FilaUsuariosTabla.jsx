import {Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router";


const FilaUsuariosTabla = ({usuario, fila, borrarUsuario}) => {

  const eliminarUsuario = () => {
      Swal.fire({
        title:`¿Estas seguro de que quieres eliminar a ${usuario.nombre}?`,
        text: "No se puede revertir este paso posteriormente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#65289eff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          //invocar a la funcion que sabe borrar que esta en App.jsx
          if (borrarUsuario(usuario.id)) {
            Swal.fire({
              title: "Usuario Eliminado",
              text: `El usuario: '${usuario.nombre}' fue eliminado correctamente`,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `El usuario '${usuario.nombre}' no pudo ser eliminado`,
              icon: "error",
            });
          }
        }
      });
    }

  return (
    <tr>
      
      <td>{fila}</td>
      <td>{usuario.usuario}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.correoElectronico}</td>
      <td className="">
        <Link className="me-2 mb-2 mb-md-1 btn btn-primary">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button className="mb-2 mb-md-1 btn btn-danger" onClick={eliminarUsuario}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default FilaUsuariosTabla;
