import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const FilaProductoTabla = ({ juego, borrarProducto }) => {
  const eliminarJuego = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar este juego?",
      text: "No se puede revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#65289eff",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrarProducto(juego.id)) {
          Swal.fire({
            title: "Juego eliminado",
            text: `El juego '${juego.nombreJuego}' fue eliminado correctamente`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El juego '${juego.nombreJuego}' no pudo ser eliminado`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <tr>
      <td>
        <img
          src={juego.imagen}
          alt={juego.nombreJuego}
          className="img-thumbnail"
        />
      </td>
      <td>{juego.nombreJuego}</td>
      <td>{juego.categoria}</td>
      <td>USD {juego.precio}</td>
      <td>
        <Link
          to={`/editar/${juego.id}`}
          className="me-2 mb-2 mb-md-1 btn btn-primary"
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button
          variant="danger"
          className="mb-2 mb-md-1 btn"
          onClick={eliminarJuego}
        >
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default FilaProductoTabla;
