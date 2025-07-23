import { Row, Col } from "react-bootstrap"
import CardProducto from "./CardProducto";
import CardCategorias from "./CardCategorias";

const FilaProducto = () => {
  return (
    <Row xs={1} md={3} lg={4} className="p-5 contenedor-card g-4">
      {/* <Col><CardProducto /></Col>
      <Col><CardProducto /></Col>
      <Col><CardProducto /></Col>
      <Col><CardProducto /></Col> */}
      <CardCategorias></CardCategorias>
      <CardCategorias></CardCategorias>
      <CardCategorias></CardCategorias>
      <CardCategorias></CardCategorias>
    </Row>
  )
}

export default FilaProducto;  
