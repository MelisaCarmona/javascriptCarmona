/** 
 * Versión 20210707
 */

// Lista de catálogo de fragancias
const catalogo = [{ id: 1, nombre: "Jazmín", precio: 13500, ruta: 'image/jazmin.jpg' },
    { id: 2, nombre: "Rosa", precio: 52900, ruta: 'image/rosa.jpg' },
    { id: 3, nombre: "Ocean", precio: 15000, ruta: 'image/ocean.jpg' },
    { id: 3, nombre: "Lavanda", precio: 5000, ruta: 'image/lavanda.jpg' },
    { id: 3, nombre: "Limoncillo", precio: 14350, ruta: 'image/limoncillo.jpg' },
    { id: 3, nombre: "Canela", precio: 4500, ruta: 'image/canela.jpg' },
    { id: 3, nombre: "Azucenas", precio: 23000, ruta: 'image/azucena.jpg' },
    { id: 3, nombre: "Citrico", precio: 1200, ruta: 'image/citrico.png' },
    { id: 3, nombre: "Eucalipto", precio: 20000, ruta: 'image/eucalipto.jpg' },
];

let suma = 0;

for (const producto of catalogo) {
    //Se crea estructura del catálogo 
    $("#catalogo").append(`<div>
                        <h2>${producto.nombre}</h2>
                        <img id="img_producto" src="${producto.ruta}"/><br>
                        <b> $ ${producto.precio}</b><br>
                        <button class="btn_anexar" id="btn${producto.id}">AÑADIR AL CARRITO</button>
                        </div>`);
    //Se crea el evento del botón
    $(`#btn${producto.id}`).on('click', function() {
        suma = suma + producto.precio;
        console.log(suma);
    });
}

//Se imprime la factura
$('#icon_purchase').on('click', () => {
    let nombre = prompt('Nombre Completo');
    nombre = nombre.toUpperCase();
    alert("FACTURA DE COMPRA\nNombre: " + nombre + "\nTotal a pagar: " + suma);
});