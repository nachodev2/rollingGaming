import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const CardProducto = () => {
  return (
    
    <div className="contenedor-card">
      <Card className='p-0 rounded-4 overflow-hidden card border-secondary'>
        <Card.Img variant="top" src="https://wallup.net/wp-content/uploads/2017/03/27/420785-League_of_Legends-Ezreal.jpg" />
        <Card.Body>
          <Card.Title className='titulo-card text-light'>League of Legends</Card.Title>
          <Card.Text>
            <i className="bi bi-star-fill me-1 text-secondary"></i>
            <i className="bi bi-star-fill me-1 text-secondary"></i>
            <i className="bi bi-star-fill me-1 text-secondary"></i>
            <i className="bi bi-star-fill me-1 text-secondary"></i>
            <i className="bi bi-star-fill me-1 text-secondary"></i>
          </Card.Text>
          <Card.Text className='p-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis.
          </Card.Text>
          <Card.Text className='text-secondary fw-bold fs-4'>
            $59.99
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className='rounded-5 fw-bold py-2 btn-card'>Comprar <i className="bi bi-cart3 ms-2"></i></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProducto;

