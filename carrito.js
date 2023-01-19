const { default: Swal } = require("sweetalert2");

class Carrito{
    // añadir producto al Carrito
    comprarProducto (e){
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
           this.leerDatosProducto(producto);
        }
    }
    // con leerDatos se debe mostrar toda la informacion del producto



leerDatosProducto(producto){
    const infoProducto = {
           imagen : producto.querySelector ('img').src,
           titulo : producto.querySelector ('h4'),
           precio : producto.querySelector ('.precio span'),
           id : producto.querySelector ('a').getAttribute('data-id'),
           cantidad: 1,
        }
        let productosLS = this.obtenerProductosLS();
        array.forEach(productoLS => {
            if (productoLs.id === infoProducto.id){
                productosLS = productosLS.id;
            };
            if (productosLS === infoProducto.id ){
                Swal.fire({
                    icon: 'info',
                    title: 'Oops...',
                    text: 'El producto fue agregado!',
                    timer: 1000,
                    showConfirmButton: false,
                  })
            }
            else{
                this.insertarCarrito(infoProducto);
            }
            this.insertarCarrito(infoProducto);
    
        });
            
        
    }
        
    insertarCarrito(producto){
        const row = document.createElement ('tr');
        row.innerHTML = `
        <td>
        <img src="${producto.imagen}" width: 100>
        </td>
        <td>
        ${producto.titulo}
        ${producto.precio}
        </td>
        <td>
        <a href="#" class= "borrar-producto fas fa-times-circule" data-id= ${productO.id} ></a>
        </td>
        `;
        listaProductos.appendChild(row); 
        this.guardarProductosLS(producto);
    }

   eliminarProducto (e){
    e.preventDefault();
    let producto, productoID;
    if (e.target.classList.contains('borrar-producto')){
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoID = producto.querySelector ('a').getAttribute('data-id');
    }
    this.eliminarProductoLS(productosID);

   }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLS();
        return false;

      }

       guardarProductosLS(producto){
        let productos;
        productos = this.obtenerProductosLS();
        productos.push('producto');
        localStorage.setItem('productos',JSON.stringify(productos));
      }
       obtenerProductosLS(){
        let productoLS;
        if (localStorage.getItem('productos')===null){
            productoLS = [];
        }
        else{
            productoLS = JSON.parse(localStorage.getItem('producto'));
        }
        return productoLS;
      }
    }


    eliminarProductoLS(productoID){
        let productosLS;
        productosLS = this.obtenerProductosLS();
        productosLS.forEach(productosLS,index => {
            if (productosLS.id === productoID){
                productosLS.splice(index,1)
            }
            localStorage.setItem('productos', JSON.stringify('productosLS'));
        });
        
    leerLS(){
        let productosLS;
        productosLS = this.obtenerProductosLS();
        productosLS.forEach(producto => {
            const row = document.createElement ('tr');
            row.innerHTML = `
            <td>
            <img src="${producto.imagen}" width: 100>
            </td>
            <td>
            ${producto.titulo}
            ${producto.precio}
            </td>
            <td>
            <a href="#" class= "borrar-producto fas fa-times-circule" data-id= ${productO.id} ></a>
            </td>
            `;
            
        });
        listaProductos.appendChild (row);
       
    }
    leerLSCompra(){
        let productosLS;
        productosLS = this.obtenerProductosLS();
        productosLS.forEach(producto => {
            const row = document.createElement ('tr');
            row.innerHTML = `
            <td>
            <img src="${producto.imagen}" width: 100>
            </td>
            <td>
            ${producto.titulo}
            ${producto.precio}
            </td>
            <td>
                <input type= "number" class="form-control cantidad" min="1" value=${producto.cantidad}> 
            </td>
            <td>
            ${producto.precio * producto.cantidad }
            </td>
            <td>
            <a href="#" class= "borrar-producto fas fa-times-circule" data-id= ${productO.id} ></a>
            </td>
            `;
            
        });
        listaCompra.appendChild (row);
       
    }
    
    
    vaciarLS(){
    localStorage.clear();
    }
    procesarPedido(e){
        e.preventDefault();
        if (this.obtenerProductosLS().length === 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El carrito esta vacio, agrega tus productos',
                timer: 2000,
                showConfirmButton: false,

        },
        location.href= "compra.html",
    }

}


    }

    calcularTotal(){
        let productoLS;
        let total = 0 , subtotal = 0, iva = 0 ;
        productoLS = this.obtenerProductosLS();
        // HACER UN FOR LOOP
        // for(let i= 0; i < productoLS.length; i++);
        // let element = number (productoLS[i].precio * productoLS[i].cantidad);
        // total = total + element;
    
    }

