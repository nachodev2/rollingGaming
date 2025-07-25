import { createContext, useState } from 'react';

// Creamos el contexto
export const FavoritosContext = createContext();

//Creamos el Provider que envolverá la app
export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  // Agregar juego
  const agregarAFavoritos = (juego) => {
    const yaEsta = favoritos.find((item) => item.id === juego.id);
    if (!yaEsta) {
      setFavoritos((prev) => [...prev, juego]);
    }
  };

  // Quitar juego
  const quitarDeFavoritos = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  // Pasamos el valor a todos los componentes hijos
  return (
    <FavoritosContext.Provider value={{ favoritos, agregarAFavoritos, quitarDeFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};
