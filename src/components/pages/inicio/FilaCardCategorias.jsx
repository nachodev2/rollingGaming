import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './inicio.css';

const CardCategorias = () => {
  return (
    <>
    <h2 className='text-center my-5 display-2'>Categorías</h2>
    <Container fluid className="py-5">
      <Row className="justify-content-center g-3">
        <Col xs={12} md={6} lg={4} className="d-flex">
            <Card className='p-0 rounded-4 overflow-hidden card-categoria border-secondary text-center w-100'>
              <h2 className='display-2 pt-2'>🗺️</h2>
              <Card.Body className='bg-card d-flex flex-column justify-content-around pb-4'>
                <Card.Title className='titulo-card text-light'>Aventura</Card.Title>
                <Card.Text className='text-color p-0'>
                  1 juego
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className='rounded-5 fw-bold py-2 btn-card'>Ver más <i className="bi bi-eye ms-2"></i></Button>
                </div>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
            <Card className='p-0 rounded-4 overflow-hidden card-categoria border-secondary text-center w-100'>
              <h2 className='display-2 pt-2'>⚔️</h2>
              <Card.Body className='bg-card d-flex flex-column justify-content-around pb-4'>
                <Card.Title className='titulo-card text-light'>Acción</Card.Title>
                <Card.Text className='text-color p-0'>
                  1 juego
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className='rounded-5 fw-bold py-2 btn-card'>Ver más <i className="bi bi-eye ms-2"></i></Button>
                </div>
              </Card.Body>
            </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="d-flex">
            <Card className='p-0 rounded-4 overflow-hidden card-categoria border-secondary text-center w-100'>
              <h2 className='display-2 pt-2'>🧙‍♂️</h2>
              <Card.Body className='bg-card d-flex flex-column justify-content-around pb-4'>
                <Card.Title className='titulo-card text-light'>RPG</Card.Title>
                <Card.Text className='text-color p-0'>
                  1 juego
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className='rounded-5 fw-bold py-2 btn-card'>Ver más <i className="bi bi-eye ms-2"></i></Button>
                </div>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default CardCategorias;