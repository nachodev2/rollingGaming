import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioProducto = ({cargarJuego}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit=(juego)=> {
    if (cargarJuego(juego)===true){
      Swal.fire({
          title: "Creaste un juego",
          text: `El producto ${juego.nombreJuego} fue creado correctamente`,
          icon: "success",
        })
        reset();
    }else{
      Swal.fire({
          title: "Error al crear el juego",
          text: `El producto ${juego.nombreJuego} no pudo ser creado`,
          icon: "error",
        })
    }
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
                  value: 3,
                  message:
                    "El nombre del juego debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 100,
                  message:
                    "El nombre del juego debe tener como máximo 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreJuego?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="desarrollador">
            <Form.Label>Desarrollador</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Riot Games"
              required
              minLength={3}
              maxLength={100}
              {...register("desarrollador", {
                required: "El nombre del desarrollador es un dato obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El nombre del desarrollador debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 100,
                  message:
                    "El nombre del desarrollador debe tener como máximo 100 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.desarrollador?.message}
            </Form.Text>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="categoria">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              id="categoriaJuego"
              required
              {...register("categoria", {
                required: "Debe seleccionar una categoria",
              })}
            >
              <option value="">Elige una categoría</option>
              <option value="Acción y Aventura">Acción y aventura</option>
              <option value="Estrategia">Estrategia</option>
              <option value="Juego de Rol">Juego de Rol</option>
              <option value="Lucha">Lucha</option>
              <option value="Simulación">Simulación</option>
              <option value="Tiros">Tiros</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="precio">
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
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
            required
            minLength={10}
            maxLength={300}
            {...register("imagen", {
              required: "La url de la imagen es un dato obligatorio",
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                message:
                  "La imagen debe ser una url válida terminada en (jpg|jpeg|png|webp)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: League of Legends (LoL) es un videojuego de estrategia por equipos, donde dos equipos de cinco jugadores se enfrentan para destruir la base del otro. Los jugadores eligen entre una variedad de campeones, cada uno con habilidades únicas, y luchan en un mapa llamado 'La Grieta del Invocador'. El juego se centra en la cooperación, la estrategia y la habilidad individual para dominar el campo de batalla y lograr la victoria"
            as="textarea"
            rows={3}
            required
            minLength={10}
            maxLength={500}
            {...register("descripcion", {
              required: "La descripción del juego es un dato obligatorio",
              minLength: {
                value: 10,
                message:
                  "La descripción del juego debe tener al menos 10 caracteres",
              },
              maxLength: {
                value: 500,
                message:
                  "La descripción del juego debe tener como máximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion?.message}
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
            <Form.Control type="text" required placeholder="Ej: NVIDIA GTX 750" minLength={2}
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
