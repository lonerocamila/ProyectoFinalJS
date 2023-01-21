const carro = new Carrito();

const listaProductos = document.getElementById ('lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById ('vaciar carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');
cargarEventos ();

function cargarEventos (){
     productos.addEventListener('click', (e) => {carro.comprarProducto(e)});
     carrito.addEventListener('click', (e)=> {carro.eliminarProducto(e)});

     vaciarCarritoBtn.addEventListener('click', (e) => {carro.vaciarCarrito(e)});

     document.addEventListener ('DOMContentLoaded', carro.leerLS());

     procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)})
    
}