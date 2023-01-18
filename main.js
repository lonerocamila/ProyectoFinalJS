
//fetch para storage
document.addEventListener ('DOMContentLoaded', ()=> 
fetchData
)
const fetchData = async () =>   {
     try{
        const res = await fetch ('products.json')
        const data = await res.json ()
        console.log (data)


    } catch (error) {
        console.log (error)
    }
}
//para traer el local storage del carrito 
let cartLocalStorage = JSON. parse(localStorage. getItem("AddtoCart")); 

const AddtoCart = JSON. parse(localStorage. getItem("products")) || []; 

//para indicar que hay stock o no 
cosole.log (product1 || "The product is not available");

product=== 0 ? console.log ("at the moment we do not have stock"): console.log ("product aviable");
// SACAR LOS console.LOG!!!!!
// Leer datos de data.json
 leerJSON() = fetch('data.json')
        .then(response => response.json())
        .then(data => {
            productos = data;
            renderProductos();
        })
        containerProducts.apendChild(div)
    
    const button = document.getElementById('add$product.id}')
    button.addEventListener('click', ()=> {
        AddtoCart(product.id)
    })


// carrito vacio
let carrito = [];

// agregar productos mediante DOM
agregarProducto = (e) => {
    e.preventDefault();
    leerJSON.forEach(producto) { 
        const div = document.createElement('div'); {
    const div = document.createElement('div');
    div.classList.add('producto');   
    div.innerHTML = `
    img src="${producto.img}" alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <button id="agregar${product.id}" class="button-add">Add <i class="fas fa-shopping-cart"></i> </button>    `

    productos.push(productoObj);
    document.getElementById('formulario').reset();
    document.getElementById('producto').focus();
    renderProductos();
}   }}
