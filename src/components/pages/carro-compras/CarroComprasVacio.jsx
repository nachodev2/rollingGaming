
import { Container, Row, Col, Button } from 'react-bootstrap';
import './carroCompras.css'; 
import { Link } from 'react-router';

function CarroComprasVacio () {
  return (
    <Container className="text-center my-5 ">
        <Row>
            <Col>
                <img src="/empty_cart.png" alt="Carro de Compras Vacío" id='cart-svg' className='mb-4 cart-svg' />
                <h2 className="mb-3 text-center">¡Tu carro de compras está vacío!</h2>
                <p className='mb-4'>¡Agrega productos!</p>
                <Link to="/tienda">
                <Button variant="primary" className='textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3'>Ir a la tienda</Button>
                </Link>
            </Col>
        </Row>
    </Container>
  )
}

export default CarroComprasVacio
