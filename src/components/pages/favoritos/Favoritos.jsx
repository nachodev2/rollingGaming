import './favoritos.css';
import { useContext } from 'react';
import { FavoritosContext } from './FavoritosContext.jsx';
import { CarritoContext } from '../carro-compras/CarroComprasContext.jsx';
import FavoritosVacio from './FavoritosVacio';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Favoritos = () => {
  const { favoritos, quitarDeFavoritos } = useContext(FavoritosContext);
  const { agregarAlCarrito } = useContext(CarritoContext);

  if (favoritos.length === 0) {
    return <FavoritosVacio />;
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Tus Favoritos</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {favoritos.map((juego, idx) => (
          <Col key={juego.id || idx}>
            <Card className="h-100 border-info rounded-4 overflow-hidden card-favoritos">
              <Card.Img variant="top" src={juego.imagen} />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                  <Card.Title>{juego.titulo}</Card.Title>
                  <Card.Text>{juego.descripcion}</Card.Text>
                </div>
                <div>
                  <p className="fw-bold text-danger fs-5">${juego.precio}</p>
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      className="rounded-3"
                      onClick={() => agregarAlCarrito(juego)}
                    >
                      Comprar <i className="bi bi-cart3 ms-2"></i>
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => quitarDeFavoritos(juego.id)}
                      className="rounded-3"
                    >
                      Quitar de Favoritos <i className="bi bi-trash ms-2"></i>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Favoritos;
