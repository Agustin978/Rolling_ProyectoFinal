const URL_PRODUCTO_CATEGORIA = import.meta.env.VITE_API_PRODUCTO_CATEGORIA;

export const obtenerProductosPorCategoria = async (categoria) => {
  try {
    const respuesta = await fetch(`${URL_PRODUCTO_CATEGORIA}?categoria=${categoria}`);
    const productosPorCategoria = await respuesta.json();
    return productosPorCategoria;
  } catch (error) {
    console.log(error);
    return [];
  }
};
