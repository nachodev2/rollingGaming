import './favoritos.css';

function Favoritos() {
  return (
    <div>
      <h1>Mis Favoritos</h1>
      <p>¡Todavía no agregaste nada a favoritos!</p>
      <div>
        /* Aquí podrías agregar una imagen o un ícono representativo de favoritos vacíos */
      </div>
      <Link to="/">
        <button>Explorar contenidos</button>
      </Link>
    </div>
  );
}

export default Favoritos;