import {Button } from "react-bootstrap";


const FilaUsuariosTabla = ({usuario, fila}) => {
  return (
    <tr>
      
      <td>{fila}</td>
      <td>{usuario.usuario}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.correoElectronico}</td>
      <td className="">
        <Button className="me-2 mb-2 mb-md-1 btn">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="mb-2 mb-md-1 btn">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default FilaUsuariosTabla;
