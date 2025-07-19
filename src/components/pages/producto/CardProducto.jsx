import { Card, Button } from 'react-bootstrap';

function CardProducto() {
  return (
    <Card className='p-0 rounded-4 overflow-hidden cardProducto card me-3 mb-3'>
      <Card.Img className='img-card' variant="top" src="https://wallup.net/wp-content/uploads/2017/03/27/420785-League_of_Legends-Ezreal.jpg" />
      <Card.Body className='bg-card'>
        <Card.Title className='titulo-card text-light'>League of Legends</Card.Title>
        <Card.Text>
          <i class="bi bi-star-fill color-rosa me-1"></i>
          <i class="bi bi-star-fill color-rosa me-1"></i>
          <i class="bi bi-star-fill color-rosa me-1"></i>
          <i class="bi bi-star-fill color-rosa me-1"></i>
          <i class="bi bi-star-fill color-rosa me-1"></i>
        </Card.Text>
        <Card.Text className='text-light p-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis.
        </Card.Text>
        <Card.Text className='color-rosa fw-bold fs-4'>
          $59.99
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button className='rounded-5 fw-bold py-2 btn-card'>Comprar ahora <i class="bi bi-cart3 ms-2"></i></Button>
        </div>
      </Card.Body>


    </Card>
  );
}

export default CardProducto;
