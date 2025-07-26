import { Button } from "react-bootstrap"


const FilaProducto = () => {
  return (
    <tr>
      <td><img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="" className="img-thumbnail"/></td>
      <td>nombre juego</td>
      <td>categoria</td>
      <td>precio</td>
      <td className="">
        <Button className="me-2 mb-2 mb-md-1 btn">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" className="mb-2 mb-md-1 btn">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  )
}

export default FilaProducto
