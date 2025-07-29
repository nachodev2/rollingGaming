import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children, juegosDisponibles }) => {
  const [carrito, setCarrito] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem('carrito');
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch (error) {
      console.error("Error al cargar el carrito de localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } catch (error) {
      console.error("Error al guardar el carrito en localStorage:", error);
    }
  }, [carrito]);

  useEffect(() => {
    if (!juegosDisponibles || juegosDisponibles.length === 0) {
      if (carrito.length > 0) {
        setCarrito([]);
        Swal.fire({
          icon: 'info',
          title: '¡Carrito Actualizado!',
          text: 'Se han eliminado productos de tu carrito que ya no están disponibles en la tienda.',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
      return;
    }

    const idsJuegosDisponibles = new Set(juegosDisponibles.map(juego => juego.id));

    const carritoFiltrado = carrito.filter(item => idsJuegosDisponibles.has(item.id));

    if (carritoFiltrado.length < carrito.length) {
      setCarrito(carritoFiltrado);
      Swal.fire({
        icon: 'info',
        title: '¡Se ha eliminado el juego!',
        text: 'Se han eliminado correctamente el juego de la tienda y se actualizaron los carros de compras.',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  }, [juegosDisponibles, carrito]); // Agregué 'carrito' como dependencia para evitar un loop infinito en algunos escenarios

  const agregarAlCarrito = (productoAAgregar) => {
    const productoExistente = carrito.find(
      (item) => item.id === productoAAgregar.id
    );

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === productoAAgregar.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
      Swal.fire({
        icon: 'success',
        title: '¡Cantidad Actualizada!',
        text: `Se agregó una unidad más de "${productoAAgregar.nombreJuego || productoAAgregar.nombre}" a tu carrito.`,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      setCarrito([...carrito, { ...productoAAgregar, cantidad: 1 }]);
      Swal.fire({
        icon: 'success',
        title: '¡Producto Agregado!',
        text: `"${productoAAgregar.nombreJuego || productoAAgregar.nombre}" se ha añadido a tu carrito de compras.`,
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const eliminarDelCarrito = (idProductoAEliminar) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡El producto se eliminará de tu carrito!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito(carrito.filter((item) => item.id !== idProductoAEliminar));
        Swal.fire(
          '¡Eliminado!',
          'El producto ha sido retirado de tu carrito.',
          'success'
        );
      }
    });
  };

  const vaciarCarrito = () => {
    Swal.fire({
      title: '¿Vaciar carrito?',
      text: 'Se eliminarán todos los productos de tu carrito. ¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([]);
        Swal.fire('¡Carrito Vacío!', 'Todos los productos han sido eliminados.', 'success');
      }
    });
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const contextValue = {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
    calcularTotal,
  };

  return (
    <CarritoContext.Provider value={contextValue}>
      {children}
    </CarritoContext.Provider>
  );
};