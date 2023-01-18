class Carrito{
    // añadir producto al Carrito
    comprarProducto (e){
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            // this.leerDatosProducto(producto);
            console.log (producto);
        }
    }
}
leerDatos(producto){
    const infoProducto {
     imagen : document.querySelector ('img).src,
     producto: document.querySelector ('h4').textContent,
     precio: document.querySelector ('precio').textContent,
     id: producto.querySelector('a').getAttribute('data-id'),
     cantidad: 1
    }
}

let productoLS;
productosLS = this.obtenerProductosLS();
productosLS.forEach(function (productoLS) => {
    if(productoLS.id ==== infoProducto.id ){
        productoLS = productoLS.id
    }
});