import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8} className="mt-5">
          <section className="">
            <h2>Titulo de juego</h2>
            <img src="https://blog.latam.playstation.com/tachyon/sites/3/2024/12/7f1951713450e3a8d5026e39c444fdaf30f3ece2.png?resize=1088%2C612&zoom=0.87" alt=""  className="detalleImg"/>
          </section>
          </Col>
          <Col sm={4} className="mt-5">
            <Card className="detalleJuego">
              <Card.Body>
                <Card.Title>Descripcion</Card.Title>
                <Card.Text>
                  Aqui va toda la descripcion del juego 
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Desarrollador</ListGroup.Item>
                <ListGroup.Item>Precio</ListGroup.Item>
              </ListGroup>
              <Card.Footer>
                <Card.Link href="#">categoria</Card.Link>
                <Card.Link href="#">categoria</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <table>
              <thead>
                <tr>
                  <th className="fs-5">Componente</th>
                  <th className="fs-5">Requisitos Mínimos</th>
                  <th className="fs-5">Requisitos Óptimos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tablaCeldas">Procesador</td>
                  <td className="tablaCeldas">Intel Core i3 / AMD Ryzen 3</td>
                  <td className="tablaCeldas">Intel Core i7 / AMD Ryzen 7</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Memoria RAM</td>
                  <td className="tablaCeldas">8 GB</td>
                  <td className="tablaCeldas">16 GB</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Tarjeta Gráfica</td>
                  <td className="tablaCeldas">NVIDIA GTX 750 / AMD R7 260</td>
                  <td className="tablaCeldas">NVIDIA RTX 3060 / AMD RX 6700</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Almacenamiento</td>
                  <td className="tablaCeldas">50 GB HDD</td>
                  <td className="tablaCeldas">50 GB SSD</td>
                </tr>
                <tr>
                  <td className="tablaCeldas">Sistema Operativo</td>
                  <td className="tablaCeldas">Windows 10 (64-bit)</td>
                  <td className="tablaCeldas">Windows 11 (64-bit)</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col className="mt-5">
            <h4 className="fs-3">Reseñas</h4>
           <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quasi itaque suscipit ipsum. Mollitia nesciunt omnis architecto deserunt accusantium deleniti alias quo quae, iusto numquam, qui voluptates labore ducimus voluptas?</p>
           <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum odio eum quia, eaque error. Qui explicabo illo repudiandae alias.</p>
           <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse cum nulla, facere id molestiae consectetur animi doloremque voluptatem omnis.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalleProducto;
