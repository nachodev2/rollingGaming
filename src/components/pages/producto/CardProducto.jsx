import {Card , ListGroup} from 'react-bootstrap';

function CardProducto() {
  return (
    <Card className='p-0 rounded-4 overflow-hidden'>
      <Card.Img className='img-card' variant="top" src="https://wallup.net/wp-content/uploads/2017/03/27/420785-League_of_Legends-Ezreal.jpg" />
      <Card.Body>
        <Card.Title className='text-danger'>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
