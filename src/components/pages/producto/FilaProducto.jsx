import { Row, Col } from "react-bootstrap";
import CardProducto from "./CardProducto";

const FilaProducto = () => {
  return (
    <Row xs={1} md={3} lg={4} className="p-5 contenedor-card g-4">
      <Col><CardProducto /></Col>
      <Col><CardProducto /></Col>
      <Col><CardProducto /></Col>
      <Col><CardProducto /></Col>
    </Row>
  )
}

export default FilaProducto;  
