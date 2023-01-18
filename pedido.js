const carro = new Carrito

Carrito = document.getElementById ('carrito')
const producto =document.getElementById ('lista-productos')

const listaProductos = document.querySelector ('#lista-carrito tbody')

cargarEventos();

function cargarEventos (){
    productos.addEventListener('click', (e)=> comprarProducto(e))}