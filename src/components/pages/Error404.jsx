import '/src/Error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>Página no encontrada</h1>
      <img 
        src="/error404-2.png" 
        alt="Error 404 - Página no encontrada"
        className="error-image"
      />
      <p>Lo sentimos, la página que buscás no existe.</p>
    </div>
  );
};

export default Error404;
