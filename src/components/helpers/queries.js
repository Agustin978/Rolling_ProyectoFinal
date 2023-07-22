const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;
const URL_PEDIDOS = import.meta.env.VITE_API_PEDIDOS;

//Funcion para realizar el logueo en la pagina
export const login = async (usuario) =>
{
    try
    {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if(usuarioBuscado)
        {
            if(usuarioBuscado.password === usuario.password)
            {
                return usuarioBuscado;
                /*return {
                    status: respuesta.status,
                    mensaje: respuesta.mensaje,
                    usuario: respuesta.nombreUsuario,
                    uid: respuesta.uid,
                    type: 
                }*/
            }else
            {
                //Si las contraseñas no coinciden 
                return 0;
            }
        }else
        {
            //Si no se encuentra ningun usuario con ese mail almacenado
            return 0;
        }
    }catch(error)
    {
        console.log('A ocurrido un error: '+error);
        return null;
    }
}

export const registrarUsuario = async (nuevoUsuario) =>
{
    try
    {
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json();
        const existeNombreUsuario = listaUsuarios.find((itemUsuario) => itemUsuario.nombreUsuario === nuevoUsuario.nombreUsuario);
        const existeEmailUsuario = listaUsuarios.find((itemUsuario) => itemUsuario.email === nuevoUsuario.email);
        if(!existeEmailUsuario && !existeNombreUsuario)
        {
            if(nuevoUsuario.password === nuevoUsuario.password_r)
            {
                delete nuevoUsuario.password_r;
                nuevoUsuario.type = 'user';
                APICreaUsuario(nuevoUsuario);
                return 200;
            }else
            {
                return 'La confirmacion de la contraseña no coincide con la contraseña ingresada inicialmente.';
            }
        }else
        {
            if(existeEmailUsuario && !existeNombreUsuario)
            {
                return 'El email ingresado ya se encuentra registrado.';
            }else if(!existeEmailUsuario && existeNombreUsuario)
            {
                return'El nombre de usuario ingresado ya se encuentra registrado.';
            }else if(existeEmailUsuario && existeNombreUsuario)
            {
                return 'El nombre de usuario y el mail ingresados ya se encuentran registrados.';
            }
        }
    }catch(error)
    {
        console.log('A ocurrido un error. Info: '+error);
        return null;
    }
}

const APICreaUsuario = async (nuevoUsuario) => 
{
    try
    {
        const respuesta = await fetch(URL_usuario, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        });
        return respuesta;
    }catch(error)
    {
        console.log('A ocurrido un error en metodo APICreaUsuario. Info de error: '+error);
    }
}
/*Admin PRODUCTOS */
export const crearProducto = async (producto) => {
    try {
      const respuesta = await fetch(URL_PRODUCTO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

export  const  obtenerProductos = async ()=>{
    try {
        const respuesta=await fetch(URL_PRODUCTO);
        const listaProducto = await respuesta.json();
        return listaProducto;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export  const  obtenerProductosEditar = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`);
        const productoEditar = await respuesta.json();
        return productoEditar;
    } catch (error) {
        console.log(error);
        
    }
}

export const editarProducto = async(producto ,id)=>{
    try{
        const respuesta = await fetch(URL_PRODUCTO+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}

export const eliminarProductoSeccionStorage =async(id)=>{
    try {
        //para borrar debemos crear una peticion con un id para borrar 
        const respuesta=await fetch(`${URL_PRODUCTO}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
       
    } catch (error) {
        console.log(error);
        return null;
    }
}
/*Admin Usuarios */
export  const  obtenerUsuario = async ()=>{
    try {
        const respuesta=await fetch(URL_usuario);
        const listaProducto = await respuesta.json();
        return listaProducto;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const editarUsuario = async(usuario ,id)=>{
    try{
        const respuesta = await fetch(URL_usuario+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}
export const eliminarUsuariosAdministrador =async(id)=>{
    try {
        //para borrar debemos crear una peticion con un id para borrar 
        const respuesta=await fetch(`${URL_usuario}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
       
    } catch (error) {
        console.log(error);
        return null;
    }
}

/*Admin Pedidos */
export  const  obtenerPedidos = async ()=>{
    try {
        const respuesta=await fetch(URL_PEDIDOS);
        const listaPedidos = await respuesta.json();
        return listaPedidos;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const editarPedidos = async(pedido ,id)=>{
    try{
        const respuesta = await fetch(URL_PEDIDOS+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pedido)
        });
        return respuesta;
    }catch (error){
        console.log(error);
    }
}

/*Pedidos Carrito: los pedidos guardados en el carrito se almacenan siempre en el LOCALSTORAGE
luego que el cliente los confirme se guardaran el el db.json o en la base de datos mas adelante*/
export const agregaPedidoACarrito = async(producto, usuario, detalles) =>
{
    try
    {
        let listadoPedidos = JSON.parse(localStorage.getItem('carritoCompras')) || [];
        let pedido = {
            idUsuario: usuario.id,
            idProducto: producto.id,
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            nombreProducto: producto.nombreProducto,
            precioUnidad: producto.precioNuevo,
            ...detalles
        };
        listadoPedidos.push(pedido);
        localStorage.setItem('carritoCompras', JSON.stringify(listadoPedidos));
        return 200;
    }catch(error)
    {
        console.log('A ocurrido un error. Info: ',error);
        return 400;
    }
}