import './sobreNosotros.css';

const integrantes = [
  { nombre: 'Alessandra Borges Licciardi', rol: 'Developer', descripcion: 'descripcion.', img: '/public/avatar_1.png'  },
  { nombre: 'Ignacio Tomás Ruiz', rol: 'Developer', descripcion: 'descripcion.', img: '/public/avatar_3.png'},
  { nombre: 'Ximena Barrientos', rol: 'Developer', descripcion: 'descripcion.', img: '/public/avatar_4.png'},
  { nombre: 'José Luis Baza', rol: 'Developer', descripcion: 'descripcion.', img: '/public/avatar_2.png'},
  { nombre: 'Luciana Ruiz', rol: 'Developer', descripcion: 'descripcion.', img: '/public/avatar_5.png'},
  { nombre: 'José Romero', rol: 'Developer', descripcion: 'descripcion.', img: '/public/avatar_6.png'},
];

const valores = [
  { titulo: 'Pasión por el gaming', descripcion: 'Vivimos y respiramos juegos. Seleccionamos lo mejor para nuestra comunidad.', icono: '🎮' },
  { titulo: 'Comunidad Primero', descripcion: 'Creamos un espacio inclusivo donde todos se sientan valorados.', icono: '🤝' },
  { titulo: 'Innovación', descripcion: 'Mejoramos constantemente para ofrecer experiencias únicas.', icono: '💡' },
];

const SobreNosotros = () => {
  return (
    <main className="sobre-nosotros-container">
      
      <section className="seccion-intro">
        <h1>Conocé a Nuestro <span className="highlight">Equipo</span></h1>
        <p>Somos un grupo de gamers, desarrolladores y creativos unidos por la pasión de brindar las mejores experiencias de juego y comunidad.</p>
      </section>

      <section className="seccion-mision">
        <h2>Nuestra Misión</h2>
        <p>“Crear el destino ideal para gamers en todo el mundo, donde descubrir, explorar y disfrutar videojuegos sea una experiencia inolvidable.”</p>
      </section>

      <section className="seccion-equipo">
        <h2>Nuestro Equipo</h2>
          <div className="fila fila-1">
             {integrantes.slice(0, 4).map((persona, idx) => (
          <div
        className="card-integrante"
        key={idx}
        style={{ animationDelay: `${idx * 0.15}s` }}
          >
        <img src={persona.img} alt={persona.nombre} className="avatar-img" />
        <h3>{persona.nombre}</h3>
        <h4>{persona.rol}</h4>
        <p>{persona.descripcion}</p>
      </div>
    ))}
  </div>

  <div className="fila fila-2">
    {integrantes.slice(4).map((persona, idx) => (
      <div
        className="card-integrante"
        key={idx + 4}
        style={{ animationDelay: `${(idx + 4) * 0.15}s` }}
      >
        <img src={persona.img} alt={persona.nombre} className="avatar-img" />
        <h3>{persona.nombre}</h3>
        <h4>{persona.rol}</h4>
        <p>{persona.descripcion}</p>
      </div>
    ))}
  </div>
</section>

      <section className="seccion-valores">
        <h2>Nuestros Valores</h2>
        <div className="valores-container">
          {valores.map((valor, idx) => (
            <div className="card-valor" key={idx}>
              <div className="icono">{valor.icono}</div>
              <h3>{valor.titulo}</h3>
              <p>{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="seccion-contacto">
        <h2>¿Querés contactarnos?</h2>
        <p>¿Tenés dudas o sugerencias? ¡Nos encantaría escucharte!</p>
        <div className="botones-contacto">
          <button className="btn-contacto">Contactanos</button>
          <button className="btn-secundario">Unite a la Comunidad</button>
        </div>
      </section>
    </main>
  );
};

export default SobreNosotros;
