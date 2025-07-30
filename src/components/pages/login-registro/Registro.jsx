import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useParams } from "react-router";
import { useEffect } from "react";

const Registro = ({
  cargarUsuario,
  buscarUsuario,
  titulo,
  botonEnviarRegistro,
  editarUsuario,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password") || "";
  const navegacion = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (titulo === "Editar usuario") {
      const usuarioEditar = buscarUsuario(id);
      setValue("usuario", usuarioEditar.usuario);
      setValue("nombre", usuarioEditar.nombre);
      setValue("email", usuarioEditar.email);
      setValue("año", usuarioEditar.año);
      setValue("mes", usuarioEditar.mes);
      setValue("dia", usuarioEditar.dia);
      setValue("password", usuarioEditar.password);
    }
  }, []);

  const usuarioLogeado = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
  const handleRegistro = (datos) => {
    console.log("guardar cambios");
    if (id) {
      // Modo edición
      if (editarUsuario(id, datos)) {
        Swal.fire({
          title: "Usuario Editado",
          text: `El usuario ${datos.nombre} fue editado correctamente`,
          icon: "success",
        });
        navigate("/administrador");
      } else {
        Swal.fire({
          title: "Error al editar usuario",
          text: `El usuario ${datos.nombre} no pudo ser editado`,
          icon: "error",
        });
      }
    } else {
      // Modo creación
      if (cargarUsuario(datos) === true) {
        Swal.fire({
          title: "Usuario Creado",
          text: `El usuario ${datos.usuario} fue creado correctamente`,
          icon: "success",
        });
        sessionStorage.setItem("usuarioRegistrado", JSON.stringify(datos));
        reset();
        if (usuarioLogeado?.rol === "admin") {
          navegacion("/administrador");
        } else {
          navegacion("/");
        }
      } else {
        Swal.fire({
          title: "Error al crear usuario",
          text: `El usuario ${datos.nombre} no pudo ser creado`,
          icon: "error",
        });
      }
    }
  };
  return (
    <div className="container">
      <Container className="my-5 px-4 border border-1 rounded-4 border-secondary">
        <h2 className="text-center my-4">{titulo}</h2>
        <Form onSubmit={handleSubmit(handleRegistro)}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="formUsuario">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Elige un nombre de usuario"
                {...register("usuario", {
                  required: "El nombre de usuario es obligatorio",
                  minLength: {
                    value: 5,
                    message:
                      "El nombre de usuario debe tener al menos 5 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "El nombre de usuario no puede exceder los 30 caracteres",
                  },
                })}
              />
              <Form.Text id="formTextUsuario" className="text-danger">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El nombre debe tener al menos 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "El nombre no puede exceder los 50 caracteres",
                  },
                })}
              />
              <Form.Text id="formTextNombre" className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Group as={Col} md="4" controlId="formFechaAnio">
              <Form.Select
                required
                {...register("año", {
                  required: "Debe seleccionar un año",
                })}
              >
                <option>Año</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="formFechaMes">
              <Form.Select
                required
                {...register("mes", {
                  required: "Debe seleccionar un mes",
                })}
              >
                <option>Mes</option>
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="formFechaDia">
              <Form.Select
                required
                {...register("dia", {
                  required: "Debe seleccionar un dia",
                })}
              >
                <option>Día</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formemail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="correo@rollinggaming.com"
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Formato de correo electrónico inválido",
                },
              })}
            />
            <Form.Text id="formTextCorreo" className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="formpassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Crea una contraseña"
                {...register("password", {
                  required: "La Contraseña es obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                    maxLength: {
                      value: 30,
                      message:
                        "La contraseña no debe tener más de 30 caracteres",
                    },
                  },
                })}
              />
              <Form.Text id="formTextContrasenia" className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formRepetirContrasenia">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma la contraseña"
                {...register("confirmarContrasenia", {
                  required: "Debes repetir exactamente la misma contraseña",
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
              />
              <Form.Text
                id="formTextRepetirContrasenia"
                className="text-danger"
              >
                {errors.confirmarContrasenia?.message}
              </Form.Text>
            </Form.Group>
          </Row>

          <div className="d-grid my-4 ">
            <Button variant="primary" type="submit" size="lg">
              {botonEnviarRegistro}
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Registro;
