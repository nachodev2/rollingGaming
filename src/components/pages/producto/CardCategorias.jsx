import { Card, Button } from 'react-bootstrap';

  const CardCategorias = () => {
    return (
      <div className='contenedor-card-categorias'>
        <Card className='p-0 rounded-4 overflow-hidden card border-secondary'>
          <Card.Img className='img-card-Categoria mx-auto mt-3' variant="top" src="https://static.vecteezy.com/system/resources/previews/018/931/116/original/cartoon-map-icon-png.png" />
          <Card.Body className='bg-card d-flex flex-column justify-content-around pb-4'>
            <Card.Title className='titulo-card text-light text-center'>Aventura</Card.Title>
            <Card.Text className='text-color p-0 text-center'>
              1 juego
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button className='rounded-5 fw-bold py-2 btn-card'>Ver más <i className="bi bi-eye ms-2"></i></Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

export default CardCategorias;
