import 'bootstrap-icons/font/bootstrap-icons.css';
import './favoritos.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Login from '../login-registro/Login';

function FavoritosVacio() {
  return (
    <Container className="text-center my-5 ">
        <Row>
            <Col>
                <i className="bi bi-heart"></i>
                <h2 className="mb-3 text-center">¡Favoritos está vacío!</h2>
                <p className='mb-4'>¡Agrega tus juegos favoritos!</p>
                <Link to="/tienda">
                <Button variant="primary" className='textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3'>Ir a la tienda</Button>
                </Link>
                <Login></Login>
            </Col>
        </Row>
    </Container>
  );
}

export default FavoritosVacio;