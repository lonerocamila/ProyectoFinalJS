
listaCompra  = document.querySelector('#listaCompra tbody');

cargarEventos();

const compra =  new Carrito ();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('lista-productos');
const procesarCompraBtn = document.getElementsById('procesar-compra')
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');



function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLSCompra());
    
    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)})

    compra.calcularTotal();
    
    procesarCompraBtn.addEventListener ('click', procesarCompra);

}

function procesarCompra (e){
    e.preventDefault();

    if (compra.obtenerProductoLS().length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno ',
            timer: 2000,
            showConfirmButton: false,
// REVISAR
    }).then(function){
        window.location = "index.html";
    }
    switch (cliente.value === '' ||| correo.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese los campos requeridos',
            timer: 2000,
            showConfirmButton: false,
    })
    else {
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviando = docume.createElement('img');
        enviando.src = "img/QTHn.gif";
        enviando.style.display = 'block';
        enviando.width = '150',

        setTimeout(function(e) {
            cargandoGif.style.display = 'none';
            document.querySelector('mail').appendChild(enviando);
            setTimeout(function(e) { 
                envido.remove();
                compra.vaciarLS();
                window.location = "index.html"

            },2000);

        },3000);


    }
    
}

    }
