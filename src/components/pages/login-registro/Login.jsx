import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

function Login({ setUsuarioLogeado,setUsuarioRegistradoLog}){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const usuarioLogeado = (usuario) => {
     const usuarioRegistrado = JSON.parse(sessionStorage.getItem("usuarioRegistrado"));
        if (
      usuarioRegistrado &&
      usuario.email === usuarioRegistrado.email &&
      usuario.password === usuarioRegistrado.password
    ) {
      setUsuarioRegistradoLog(true);
      sessionStorage.setItem("usuarioRegistradoLog", true);
      navigate("/");
      handleClose();
      return;
    }
    if (
      usuario.email === import.meta.env.VITE_API_EMAIL &&
      usuario.password === import.meta.env.VITE_API_CONTRASENIA
    ) {
      setUsuarioLogeado(true);
      sessionStorage.setItem("usuarioLogeado", true);
      navigate("/");
      handleClose();
    } else {
      console.log("Error en las credenciales");
    }
   
  };
  

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRegistro = () => {
    navigate("/registro");
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="textLogin me-4 colorLoginCrear rounded-3 border-2 mb-3"
      >
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
          <Form onSubmit={handleSubmit(usuarioLogeado)}>
            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label className="text-light">Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@rollinggaming.com"
                {...register("email", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "el Email debe tener un formato válido",
                    minLength: {
                      value: 1,
                    },
                    maxLength: {
                      value: 200,
                    },
                  },
                })}
              />
              <Form.Text id="formTextNombre" className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContrasenia">
              <Form.Label className="text-light">Contraseña</Form.Label>
              <Form.Control
                type="password"
                {...register("password", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "Debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial",
                  },
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "La contraseña no puede tener más de 50 caracteres",
                  },
                })}
              />
              <Form.Text id="formTextNombre" className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
          </Form>
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
          <Button variant="light" onClick={handleSubmit(usuarioLogeado)}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
