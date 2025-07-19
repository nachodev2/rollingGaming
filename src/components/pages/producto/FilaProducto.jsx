import { Row } from "react-bootstrap"
import CardProducto from "./CardProducto"

const FilaProducto = () => {
  return (
    <Row xs={1} md={3} lg={4} className="bg-danger p-5">
      <CardProducto></CardProducto>
    </Row>
  )
}

export default FilaProducto
