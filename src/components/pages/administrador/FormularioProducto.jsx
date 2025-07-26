import { Button, Col, Container, Form, Row } from "react-bootstrap";
const FormularioProducto = () => {
  return (
    <Container className="mt-3">
      <h1>Añadir un juego</h1>
      <hr />
      <Form>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="nombreJuego">
            <Form.Label>Nombre del juego</Form.Label>
            <Form.Control type="text" placeholder="Ej: League of Legends" required minLength={3} maxLength={100} />
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="desarrolladorJuego">
            <Form.Label>Desarrollador</Form.Label>
            <Form.Control type="text" placeholder="Ej: Riot Games" required minLength={3} maxLength={100} />
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="categoriaJuego">
            <Form.Label>Categoría</Form.Label>
            <Form.Select id="categoriaJuego" required>
              <option>Elige una categoría</option>
              <option value="accionAventura">Acción y aventura</option>
              <option value="estrategia">Estrategia</option>
              <option value="juegoRol">Juego de Rol</option>
              <option value="lucha">Lucha</option>
              <option value="simulacion">Simulación</option>
              <option value="tiros">Tiros</option>
            </Form.Select>
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="precioJuego">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" placeholder="Ej: 20" step={0.01} required min={0.01} max={1000}/>
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="imagenJuego">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
            required
            minLength={10}
          />
          <Form.Text className="text-danger">
            Aquí irá el código de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionJuego">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: League of Legends (LoL) es un videojuego de estrategia por equipos, donde dos equipos de cinco jugadores se enfrentan para destruir la base del otro. Los jugadores eligen entre una variedad de campeones, cada uno con habilidades únicas, y luchan en un mapa llamado 'La Grieta del Invocador'. El juego se centra en la cooperación, la estrategia y la habilidad individual para dominar el campo de batalla y lograr la victoria"
            as="textarea"
            rows={3}
            required minLength={10} maxLength={500}
          />
          <Form.Text className="text-danger">
            Aquí irá el código de error
          </Form.Text>
        </Form.Group>
        <Row>
          <h5>Requisitos mínimos del sistema</h5>
          <Form.Group as={Col} className="mb-3" controlId="microprocesador"> 
            <Form.Label>Microprocesador</Form.Label>
            <Form.Control type="text" required placeholder="Ej: Ryzen 5 5600"/>
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="memoriaRam"> 
            <Form.Label>RAM</Form.Label>
            <Form.Control type="text" required placeholder="Ej: 8GB"/>
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="grafica"> 
            <Form.Label>Gráfica</Form.Label>
            <Form.Control type="text" required placeholder="Ej: 6GB"/>
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="almacenamiento"> 
            <Form.Label>Almacenamiento</Form.Label>
            <Form.Control type="text" required placeholder="480 GB"/>
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="sistemaOperativo"> 
            <Form.Label>Sist. Operativo</Form.Label>
            <Form.Control type="text" required placeholder="Windows 10"/>
            <Form.Text className="text-danger">
              Aquí irá el código de error
            </Form.Text>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" className="mb-3">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioProducto;
