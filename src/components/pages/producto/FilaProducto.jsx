import { Button } from "react-bootstrap"


const FilaProducto = () => {
  return (
    <tr>
      <td>imagen</td>
      <td>nombre juego</td>
      <td>categoria</td>
      <td>precio</td>
      <td className="">
        <Button className="me-lg-2 btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  )
}

export default FilaProducto
