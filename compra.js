const compra =  new Carrito ();
listaCompra  = document.querySelector('#listaCompra tbody');

cargarEventos();


function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLSCompra());
    
    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)})
}


