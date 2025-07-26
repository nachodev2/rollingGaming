import { Row, Col } from "react-bootstrap";
import CardProducto from "./CardProducto";

const FilaProducto = () => {
  return (
    <div className="px-5">
      <Row xs={1} md={3} lg={4} className="mb-4 g-4">
        <Col><CardProducto /></Col>
        <Col><CardProducto /></Col>
        <Col><CardProducto /></Col>
        <Col><CardProducto /></Col>
      </Row>
    </div>
  )
}

export default FilaProducto;  
