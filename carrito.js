// DECLARACION DE VARIABLES
const compra = new carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

// const productosLS

// definir function calcularTotal
// const comprar
// const volverCarrito
// const totalComprado

// const eliminarCarrito




// utilizar fetch para obtener los datos del json
// controlar los eventos mediante librerias, promesas y asincronia 
// interfaz coherente y atractiva

function cargarEventos (){
    document.addEventListener('DOMContentLoaded', compra.leerLScompra())
}
// Eliminar productos del carrito
carrito.addEventListener ('click', (e)=> {compra.eliminarProducto(e)})

// Calcular total de la compra
compra.calcularTotal();


    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });

    function procesarCompra(){
        if (compra.obtenerProductosLS().length === 0){
            Swal.fire ({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "index.html";
        })
    }
    else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else {

        //aqui se coloca el user id generado en el emailJS
        emailjs.init('user_CEozz2F39lJJOLF5mJiDA')

        /* AGREGAR DATOS DETALLE DEL PEDIDO A UN TEXT AREA */
        const textArea = document.createElement('textarea');
        textArea.id = "detalleCompra";
        textArea.name = "detalleCompra";
        textArea.cols = 60;
        textArea.rows = 10;
        textArea.hidden = true;
        productosLS = compra.obtenerProductosLS();

        }
    }
    textArea.innerHTML = generarTabla(productosLS).innerHTML;
    carrito.appendChild(textArea);
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



// salte un cartel que diga “¡Gracias por su compra!” y borre el carrito 
Swal.fire ({
    text: '¡Gracias por su compra!',

    showConfirmButton: false,
    timer: 2000
}).then(function () {
    window.location = "index.html";
})


setTimeout(() => {
    compra.vaciarLocalStorage();
    enviado.remove();
    window.location = "index.html";
}, 2000);
(err) => {
cargandoGif.style.display = 'none';
alert("Error al enviar el email\r\n Response:\n " + JSON.stringify(err));
};

// Agregar Producto al carrito

// agregarProducto(e){}
function agregarProducto () { e.preventDefault();
    if (e.target.classList.contains ("agregarProducto")){
        const producto = (e.target.parentElement.parentElement);

    }   
    //Enviamos el producto seleccionado para tomar sus datos
    this.leerDatosProducto(producto);
};

// leer datos del producto
  leerDatosProductos (producto)
 {const infoproducto = (
       imagen = producto.queryselector('img').src,
       titulo = producto.queryselector ('h3').textContent,
       precio = producto.queryselector ('precio').textContent,
       id = producto.queryselector ('a').getAttribute('data-id'), 
       cantidad = 1
   )}
// Obtener productos del LS

let ProductoLS;

ProductoLS = this.obtenerProductosLS();
ProductoLS.forEach(function (productoLS) {
    if (productoLS.id === infoproducto.id){
        productoLS = productoLS.id;
    }   
});
if(productosLS === infoProducto.id){
    Swal.fire({
        type: 'info',
        title: 'Oops...',
        text: 'El producto ya está agregado',
        showConfirmButton: false,
        timer: 1000
    })
}
else {
    this.insertarCarrito(infoProducto);
}


// Mostrar producto seleccionado en el carrito 
 
MostrarEnCarrito (producto){
    const row = document.createElement ('tr');
    row.innerHTML = `
    <td>
        <img src="${producto.imagen}" width=100>
    </td>
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>
        <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
    </td>
`;
listaProductos.appendChild(row);
this.guardarenLS(producto);

}

// Eliminar productos del carrito en el DOM

eliminarProducto(e){
    e.preventDefault();
    let producto, productoID;
    if (e.target.classList.constains('borrar-producto')){
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        producto = producto.queryselector('a').getAttribute('data-id')
    }
    this.eliminarProductoLS(productoID);
    this.calcularTotal();
}





function generarTabla(productosLS) {
    let div = document.createElement("div");

    let tabla = document.createElement("table");
    
    tabla.innerHTML += `<table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Sub total</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>`;

    const body = tabla.childNodes[3];

    // productosLS = compra.obtenerProductosLocalStorage();
    productosLS.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML += `
                            <td>${producto.titulo}</td>
                            <td>${producto.precio}</td>
                            <td>${producto.cantidad}</td>
                            <td>${producto.precio * producto.cantidad}</td>
                        `;
        body.appendChild(row);
    });

    tabla.appendChild(body);
    div.appendChild(tabla);
    return div;
}
