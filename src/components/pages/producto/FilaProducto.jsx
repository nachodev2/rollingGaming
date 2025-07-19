import { Row } from "react-bootstrap"
import CardProducto from "./CardProducto"

const FilaProducto = () => {
  return (
    <Row xs={1} md={3} lg={4} className="bg-dark p-5 contenedor-card">
      <CardProducto></CardProducto>
      <CardProducto></CardProducto>
      <CardProducto></CardProducto>
      <CardProducto></CardProducto>
    </Row>
  )
}

export default FilaProducto
