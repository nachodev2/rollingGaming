import { Table, Container, Card, Row, Col } from "react-bootstrap";

const Administrador = () => {
  return (
    <Container>
      <section className="mt-3 mb-3 text-center">
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
