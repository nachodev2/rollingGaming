import { Button, Container, Form } from "react-bootstrap";
const FormularioProducto = () => {
  return (
    <Container className="mt-3">
      <h1>Añadir un juego</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="nombreJuego">
          <Form.Label>Nombre del juego</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-danger">
            aqui ira el codigo para el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoriaJuego">
          <Form.Label>Categoria</Form.Label>
          <Form.Select id="categoriaJuego">
            <option>Elige una categoria</option>
            <option value="accionAventura">Accion y aventura</option>
            <option value="estrategia">Estrategia</option>
            <option value="juegoRol">Juego de Rol</option>
            <option value="lucha">Lucha</option>
            <option value="simulacion">Simulacion</option>
            <option value="tiros">Tiros</option>
          </Form.Select>
          <Form.Text className="text-danger">
            aqui ira el codigo para el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Enter email" />
          <Form.Text className="text-danger">
            aqui ira el codigo para el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-danger">
            aqui ira el codigo para el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-danger">
            aqui ira el codigo para el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Desarrollador</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-danger">
            aqui ira el codigo para el error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Requisitos del sistema</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
          <Form.Text className="text-danger">
            aqui ira el codigo para el error
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioProducto;
