import { Table, Container, Card, Row, Col, Button } from "react-bootstrap";
import FilaProducto from "./producto/FilaProducto";

const Administrador = () => {
  return (
    <Container>
      <section className="mt-3 text-center">
        <Row className="justify-content-center">
          <Col xs={4}>
            <Card border="primary">
              <Card.Body>
                <Card.Text>Juegos: 10</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card border="secondary">
              <Card.Body>
                <Card.Text>Usuarios: 2</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <Card border="info">
              <Card.Body>
                <Card.Text>Categorias: 5</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="fs-4">Tabla de Juegos</h1>
        <div>
          <Button className="btn btn-primary me-2">
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
          {/* <Button variant="info" className="text-light">
            <i className="bi bi-database-fill-up"></i>
          </Button> */}
        </div>
      </div>
      <hr />
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <FilaProducto></FilaProducto>
          <FilaProducto></FilaProducto>
          <FilaProducto></FilaProducto>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
