import 'bootstrap-icons/font/bootstrap-icons.css';
import './favoritos.css';
import { Container, Row, Col, Button } from 'react-bootstrap'; 

function FavoritosVacio() {
  return (
    <Container className="text-center my-5 ">
        <Row>
            <Col>
                <i className="bi bi-heart"></i>
                <h2 className="mb-3 text-center">¡Favoritos está vacío!</h2>
                <p className='mb-4'>¡Agrega tus juegos favoritos!</p>
                <Button variant="primary" href="/" className='me-5'>Ir a la tienda</Button>
                <Button variant="primary" href="/" >Iniciar sesión</Button>
            </Col>
        </Row>
    </Container>
  );
}

export default FavoritosVacio;

