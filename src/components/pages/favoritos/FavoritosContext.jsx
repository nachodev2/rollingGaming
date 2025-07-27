import { createContext, useState, useEffect } from "react";

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = localStorage.getItem("favoritos");
    return favoritosGuardados ? JSON.parse(favoritosGuardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const agregarAFavoritos = (juego) => {
    const yaEsta = favoritos.find((item) => item.id === juego.id);
    if (!yaEsta) {
      setFavoritos((prev) => [...prev, juego]);
    }
  };

  const quitarDeFavoritos = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarAFavoritos, quitarDeFavoritos }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};
