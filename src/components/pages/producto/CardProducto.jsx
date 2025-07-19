import { Card, ListGroup } from 'react-bootstrap';

function CardProducto() {
  return (
    <Card className='p-0 rounded-4 overflow-hidden bg-card'>
      <Card.Img className='img-card' variant="top" src="https://wallup.net/wp-content/uploads/2017/03/27/420785-League_of_Legends-Ezreal.jpg" />
      <Card.Body>
        <Card.Title className='titulo-card text-light'>League of Legends</Card.Title>
        <div>
          <i class="bi bi-star-fill star-color"></i>
          <i class="bi bi-star-fill star-color"></i>
          <i class="bi bi-star-fill star-color"></i>
          <i class="bi bi-star-fill star-color"></i>
          <i class="bi bi-star-fill star-color"></i>
        </div>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='bg-card'>Cras justo odio</ListGroup.Item>
        <ListGroup.Item className='bg-card'>Dapibus ac facilisis in</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
