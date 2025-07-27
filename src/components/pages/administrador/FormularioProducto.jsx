import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioProducto = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit=(juego)=> {
    console.log(juego);
  }

  return (
    <Container className="mt-3">
      <h1>Añadir un juego</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="nombreJuego">
            <Form.Label>Nombre del juego</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: League of Legends"
              required
              minLength={3}
              maxLength={100}
              {...register("nombreJuego", {
                required: "El nombre del juego es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El nombre del juego debe tener almenos 2 caracteres",
                },
                maxLength: {
                  value: 100,
                  message:
                    "El nombre del juego debe tener como maximo 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreJuego?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="desarrolladorJuego">
            <Form.Label>Desarrollador</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Riot Games"
              required
              minLength={3}
              maxLength={100}
              {...register("desarrolladorJuego", {
                required: "El nombre del desarrollador es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El nombre del desarrollador debe tener almenos 2 caracteres",
                },
                maxLength: {
                  value: 100,
                  message:
                    "El nombre del desarrollador debe tener como maximo 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.desarrolladorJuego?.message}
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="categoriaJuego">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              id="categoriaJuego"
              required
              {...register("categoriaJuego", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option>Elige una categoría</option>
              <option value="accionAventura">Acción y aventura</option>
              <option value="estrategia">Estrategia</option>
              <option value="juegoRol">Juego de Rol</option>
              <option value="lucha">Lucha</option>
              <option value="simulacion">Simulación</option>
              <option value="tiros">Tiros</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoriaJuego?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="precioJuego">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 20"
              step={0.01}
              required
              min={0.01}
              max={1000}
              {...register("precio", {
                required: "El precio es un valor obligatorio",
                min: {
                  value: 0.01,
                  message:
                    "El precio minimo del juego debe ser de almenos USD 0.01",
                },
                max: {
                  value: 1000,
                  message:
                    "El precio máximo del juego debe ser de hasta USD 1000",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
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
            {...register("imagenJuego", {
              required: "La url de la imagen es un dato obligatorio",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                message:
                  "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagenJuego?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcionJuego">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: League of Legends (LoL) es un videojuego de estrategia por equipos, donde dos equipos de cinco jugadores se enfrentan para destruir la base del otro. Los jugadores eligen entre una variedad de campeones, cada uno con habilidades únicas, y luchan en un mapa llamado 'La Grieta del Invocador'. El juego se centra en la cooperación, la estrategia y la habilidad individual para dominar el campo de batalla y lograr la victoria"
            as="textarea"
            rows={3}
            required
            minLength={10}
            maxLength={500}
            {...register("descripcionJuego", {
              required: "La descripción del juego es un dato obligatorio",
              minLength: {
                value: 10,
                message:
                  "La descrición del juego debe tener almenos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message:
                  "La descrición del juego debe tener como máximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionJuego?.message}
          </Form.Text>
        </Form.Group>
        <Row>
          <h5>Requisitos mínimos del sistema</h5>
          <Form.Group as={Col} className="mb-3" controlId="microprocesador">
            <Form.Label>Microprocesador</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Ej: Ryzen 5 5600"
              minLength={2}
              maxLength={20}
              {...register("microprocesador", {
                required: "El Microprocesador es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El microprocesador debe tener almenos 2 caracteres",
                },
                maxLength: {
                  value: 20,
                  message:
                    "El microprocesador debe tener como maximo 20 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.microprocesador?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="memoriaRam">
            <Form.Label>RAM</Form.Label>
            <Form.Control type="text" required placeholder="Ej: 8GB" minLength={2}
              maxLength={5}
              {...register("memoriaRam", {
                required: "La memoria RAM es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "La memoria RAM debe tener almenos 2 caracteres",
                },
                maxLength: {
                  value: 5,
                  message:
                    "La memoria RAM debe tener como maximo 5 caracteres",
                },
              })}/>
            <Form.Text className="text-danger">
              {errors.memoriaRam?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="grafica">
            <Form.Label>Gráfica</Form.Label>
            <Form.Control type="text" required placeholder="Ej: NVIDIA GTX 750"minLength={2}
              maxLength={20}
              {...register("grafica", {
                required: "La tarjeta gráfica es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "La tarjeta gráfica debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 20,
                  message:
                    "La tarjeta gráfica debe tener como maximo 20 caracteres",
                },
              })} />
            <Form.Text className="text-danger">
              {errors.grafica?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="almacenamiento">
            <Form.Label>Almacenamiento</Form.Label>
            <Form.Control type="text" required placeholder="480 GB" minLength={2}
              maxLength={5}
              {...register("almacenamiento", {
                required: "Almacenamiento es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "Almacenamiento debe tener almenos 2 caracteres",
                },
                maxLength: {
                  value: 5,
                  message:
                    "Almacenamiento debe tener como maximo 5 caracteres",
                },
              })}/>
            <Form.Text className="text-danger">
              {errors.almacenamiento?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="sistemaOperativo">
            <Form.Label>Sist. Operativo</Form.Label>
            <Form.Control type="text" required placeholder="Windows 10"  minLength={2}
              maxLength={20}
              {...register("sistemaOperativo", {
                required: "El sistema operativo es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El sistema operativo debe tener almenos 2 caracteres",
                },
                maxLength: {
                  value: 20,
                  message:
                    "El sistema operativo debe tener como maximo 20 caracteres",
                },
              })}/>
            <Form.Text className="text-danger">
              {errors.sistemaOperativo?.message}
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
