import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './carroComprasVacio.css'; 

function CarroComprasVacio () {
  return (
    <Container className="text-center my-5">
        <Row>
            <Col>
                <img src="/empty_cart.png" alt="Carro de Compras Vacío" id='cart-svg' className='mb-4 cart-svg' />
                <h2 className="mb-3 text-center">¡Tu carro de compras está vacío!</h2>
                <p className='mb-4'>¡Agrega productos! O iniciá sesión para comprobar si hay algo.</p>
                <Button variant="primary" href="/" className='me-5'>Ir a la tienda</Button>
                <Button variant="primary" href="/">Iniciar sesión</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default CarroComprasVacio
