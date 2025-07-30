
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button, Alert} from 'react-bootstrap'; 
import './carroCompras.css';
import { CarritoContext } from "./CarroComprasContext";
import CarroComprasVacio from './CarroComprasVacio';



const CarroCompras = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito, calcularTotal } = useContext(CarritoContext);

  if (carrito.length === 0) {
    return <CarroComprasVacio />;
  }

  const ivaRate = 0.21;
  const subtotalSinImpuestos = calcularTotal() / (1 + ivaRate);
  const ivaIncluido = calcularTotal() - subtotalSinImpuestos;

  return (
    <Container className="my-5 py-5"> 
      <Row>

        <Col xs={12} lg={8}>
          <h2 className="titulos-cards-index fs-4 mb-3">TU CARRITO</h2> 
          <h3 className="lead fs-5">TOTAL ({carrito.reduce((acc, item) => acc + item.cantidad, 0)} productos) <b>$ {calcularTotal().toLocaleString('es-AR')}</b></h3>
          <p className="lead mb-3 fs-6">
            Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.
          </p>

          <Alert variant="secondary" className="d-flex align-items-center mt-5 mb-5 p-3 carrito-alerta"> 
            <i className="bi bi-exclamation-triangle-fill me-2 fs-5"></i>
            <div>
              <h3 className="fs-5 mb-0">🏃‍♂️‍➡️<b>CORRE</b>🏃‍♂️‍➡️</h3>
              <p className="fs-6 mb-0">Los productos en tu carrito están a punto de agotarse. No te quedes sin ellos 🎯</p>
            </div>
          </Alert>

          <Container className="mt-3">
            {carrito.map((item) => (
              <Card key={item.id} className="producto-carrito-card p-2 position-relative mb-3">
                <Button
                  variant="link"
                  className="btn-close position-absolute top-0 end-0 m-2"
                  aria-label="Close"
                  onClick={() => eliminarDelCarrito(item.id)}
                ></Button>
                <Row className="g-0 align-items-center">
                  <Col xs={4} className="text-center">
                    <Card.Img
                      src={item.imagen || 'https://via.placeholder.com/100x100?text=No+Image'}
                      className="img-fluid w-100 producto-imagen"
                      alt={item.nombreJuego || item.nombre}
                    />
                  </Col>
                  <Col xs={8}>
                    <Card.Body className="p-2">
                      <Card.Title className="mb-1">{item.nombreJuego || item.nombre}</Card.Title>
                      {item.color && (
                        <Card.Text className="text-muted small mb-1">
                          {item.color}
                        </Card.Text>
                      )}
                      {item.tamanio && (
                        <Card.Text className="small mb-1">
                          <strong>Tamaño:</strong> {item.tamanio}
                        </Card.Text>
                      )}
                      <Card.Text className="mb-1"><strong>${item.precio ? item.precio.toLocaleString('es-AR') : 'N/A'}</strong></Card.Text>
                      <Card.Text className="small text-muted">Cantidad: {item.cantidad}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
            <div className="d-flex justify-content-end mt-4">
                <Button variant="outline-secondary" className="vaciar-carrito-btn" onClick={vaciarCarrito}>
                    <i className="bi bi-trash me-2"></i>Vaciar Carrito
                </Button>
            </div>
          </Container>
        </Col>

        <Col xs={12} lg={4} className="order-lg-last"> 
          <div className="checkout-summary  p-4 position-sticky top-0"> 
            <Link to="/error404" className="text-decoration-underline text-black d-flex mb-3"> 
              <i className="bi bi-ticket-perforated fs-6 me-3 align-items-center"></i>
              <h3 className="fs-6">Usá un código promocional</h3>
            </Link>
            <h2 className="fs-5 mb-4"><strong>RESUMEN DEL PEDIDO</strong></h2>
            <div className="d-flex justify-content-between">
              <span>Productos ({carrito.reduce((acc, item) => acc + item.cantidad, 0)} ítems)</span> 
              <span>$ {calcularTotal().toLocaleString('es-AR')}</span> 
            </div>
            <div className="d-flex justify-content-between">
              <span>Entrega</span>
              <span>Gratis</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <strong>Total</strong>
              <strong>$ {calcularTotal().toLocaleString('es-AR')}</strong> 
            </div>
            <p className="text-muted small">(Precio sin impuestos $ {subtotalSinImpuestos.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})</p>
            <p className="text-muted small">(IVA incluido $ {ivaIncluido.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})</p>
            <Button
              variant="dark" 
              className="w-100 mt-3 pagar-btn" 
              onClick={() => Swal.fire('Proceso de Pago', 'Funcionalidad de pago en desarrollo. ¡Gracias por tu compra!', 'info')}
            >
              IR A PAGAR <span className="arrow">→</span>
            </Button>
            <Link to="/tienda" className="btn btn-outline-primary w-100 mt-2">
                <i className="bi bi-arrow-left-short me-2"></i>Seguir Comprando
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CarroCompras;
