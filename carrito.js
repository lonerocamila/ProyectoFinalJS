// DECLARACION DE VARIABLES
// const leerDatosProductos
// const productosLS
// const guardarenLS
// const obtenerdeLS
// const agregarProducto
// const comprar
// const volverCarrito
// const totalComprado
// const eliminarProducto
// const eliminarCarrito




// utilizar fetch para obtener los datos del json
// controlar los eventos mediante librerias, promesas y asincronia 
// interfaz coherente y atractiva

function onClick (e){
    processJSON(e.target.id).then ((data)=>{
        console.trace(data)
    })
}

async function getResponse (url){
    const res = await fetch (url);
    const json = await res.json ()

    return json;
}


if (id == "JsonBtn"){
    return await processAdditionalResponse(JSON);
        
}


// Prevenir un error
  preventDefault ();
    if (!e.document) throw new Error ("error"); return t(e)
// Agregar Producto al carrito
// agregarProducto(e){}
    
    e.preventDefault();
    if (e.target.classList.contains ("agregaralcarrito")){
        const producto = e.target.parentElement.parentElement;

    }   



// salte un cartel que diga “¡Gracias por su compra!” y borre el carrito 