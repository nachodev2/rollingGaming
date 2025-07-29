const Estrellas = ({ puntuacion }) => {
  const estrellas = [];

  for (let i = 1; i <= 5; i++) {
    if (puntuacion >= i) {
      estrellas.push(<i key={i} className="bi bi-star-fill text-secondary me-1"></i>);
    } else if (puntuacion >= i - 0.5) {
      estrellas.push(<i key={i} className="bi bi-star-half text-secondary me-1"></i>);
    } else {
      estrellas.push(<i key={i} className="bi bi-star text-secondary me-1"></i>);
    }
  }

  return <>{estrellas}</>;
};

export default Estrellas;
