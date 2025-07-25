import './favoritos.css';
import { useContext } from 'react';
import { FavoritosContext } from './FavoritosContext.jsx';
import FavoritosVacio from './FavoritosVacio';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Favoritos = () => {
  const { favoritos, eliminarDeFavoritos } = useContext(FavoritosContext);

  // Mostramos el componente vacío si no hay favoritos
  if (favoritos.length === 0) {
    return <FavoritosVacio />;
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Tus Favoritos</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {favoritos.map((juego, idx) => (
          <Col key={idx}>
            <Card className="h-100 border-info rounded-4 overflow-hidden card-favoritos">
              <Card.Img variant="top" src={juego.imagen} />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                  <Card.Title>{juego.titulo}</Card.Title>
                  <Card.Text>{juego.descripcion}</Card.Text>
                </div>
                <div>
                  <p className="fw-bold text-danger fs-5">${juego.precio}</p>
                  <Button
                    variant="outline-primary"
                    onClick={() => eliminarDeFavoritos(juego.id)}
                    className="w-100 rounded-3">
                    Quitar de Favoritos <i className="bi bi-trash ms-2"></i>
                  </Button>
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
