const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;

export const obtenerProductosPorCategoria = async (categoria) => {
  try {
    const respuesta = await fetch(`${URL_PRODUCTO}?categoria=${categoria}`);
    const productosPorCategoria = await respuesta.json();
    return productosPorCategoria;
  } catch (error) {
    console.log(error);
    return [];
  }
};
