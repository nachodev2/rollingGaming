import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import { useNavigate } from 'react-router';

function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRegistro = () => {
    navigate('/registro'); 
  };

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
        <div className="d-flex justify-content-center">
          <Image
            src="/Logo.png"
            alt="Logo de Rolling Gaming"
            width="100"
          ></Image>
        </div>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label className="text-light">Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="correo@rollinggaming.com" />
            <Form.Text id="formTextNombre" className="text-danger">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContrasenia">
            <Form.Label className="text-light">Contraseña</Form.Label>
            <Form.Control type="password" />
            <Form.Text id="formTextNombre" className="text-danger">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
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

          <div className="text-center mt-4">
            <span className="text-muted">¿No tienes una cuenta? </span>
            <Button
              variant="link"
              onClick={handleRegistro}
              className="p-0 align-baseline"
            >
              Regístrate
            </Button>
          </div>
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
