import { Button } from "react-bootstrap"


const FilaProductoTabla = ({juego}) => {
  console.log(juego)
  return (
    <tr>
      <td><img src={juego.imagen} alt={juego.nombreJuego} className="img-thumbnail"/></td>
      <td>{juego.nombreJuego}</td>
      <td>{juego.categoria}</td>
      <td>{juego.precio}</td>
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

export default FilaProductoTabla
