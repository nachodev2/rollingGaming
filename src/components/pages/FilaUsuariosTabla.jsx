import {Button } from "react-bootstrap";

const FilaUsuariosTabla = () => {
  return (
    <tr>
      
      <td>1</td>
      <td>usuario</td>
      <td>nombre</td>
      <td>email</td>
      <td className="">
        <Button className="me-lg-2 btn">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default FilaUsuariosTabla;
