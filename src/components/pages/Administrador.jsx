import {Container, Card, Row, Col} from "react-bootstrap";
import TablaJuegos from "./TablaJuegos";
import TablaUsuarios from "./TablaUsuarios";

const Administrador = () => {
  return (
    <Container>
      <section className="mt-3 text-center">
        <Row className="justify-content-center">
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>Juegos: <strong className="text-light">11</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>Usuarios: <strong className="text-light">11</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} lg={4} className="mb-3">
            <Card border="primary">
              <Card.Body>
                <Card.Text>Categorias: <strong className="text-light">11</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <TablaJuegos />
      <TablaUsuarios />
      
    </Container>
  );
};

export default Administrador;
