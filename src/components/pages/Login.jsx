import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Iniciar Sesión
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="correo@rollinggaming.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContrasenia">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Recordarme`}
                />
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="light">Enviar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
