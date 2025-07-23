import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  ListGroup,
} from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8} className="mt-5">
            <Carousel fade>
              <Carousel.Item>
                <img
                  src="https://i.blogs.es/7d7bce/helldivers-2-1/1200_800.webp"
                  alt="" className="carouselImg"
                />
  
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://culturageek.com.ar/wp-content/uploads/2025/05/helldivers-2-dev-working-to-address-complaints-after-escalat_qee7.webp"
                  alt="" className="carouselImg"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://cdn.mos.cms.futurecdn.net/dohDeBShUEmCJhhdTVEdWQ-650-80.jpg.webp"
                  alt="" className="carouselImg"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={4} className="mt-5">
            <Card className="">
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5">
            <table>
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Requisitos Mínimos</th>
                  <th>Requisitos Óptimos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Procesador</td>
                  <td>Intel Core i3 / AMD Ryzen 3</td>
                  <td>Intel Core i7 / AMD Ryzen 7</td>
                </tr>
                <tr>
                  <td>Memoria RAM</td>
                  <td>8 GB</td>
                  <td>16 GB</td>
                </tr>
                <tr>
                  <td>Tarjeta Gráfica</td>
                  <td>NVIDIA GTX 750 / AMD R7 260</td>
                  <td>NVIDIA RTX 3060 / AMD RX 6700</td>
                </tr>
                <tr>
                  <td>Almacenamiento</td>
                  <td>50 GB HDD</td>
                  <td>50 GB SSD</td>
                </tr>
                <tr>
                  <td>Sistema Operativo</td>
                  <td>Windows 10 (64-bit)</td>
                  <td>Windows 11 (64-bit)</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col className="mt-5">
            <h4>Reseñas</h4>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae quasi itaque suscipit ipsum. Mollitia nesciunt omnis architecto deserunt accusantium deleniti alias quo quae, iusto numquam, qui voluptates labore ducimus voluptas?</p>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum odio eum quia, eaque error. Qui explicabo illo repudiandae alias.</p>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse cum nulla, facere id molestiae consectetur animi doloremque voluptatem omnis.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalleProducto;
