/** 
 * Versión 20210707
 */

// Lista de catálogo de fragancias
const catalogo = [{ id: 1, nombre: "Jazmín", precio: 13500, ruta: 'image/jazmin.jpg' },
    { id: 2, nombre: "Rosa", precio: 52900, ruta: 'image/rosa.jpg' },
    { id: 4, nombre: "Ocean", precio: 15000, ruta: 'image/ocean.jpg' },
    { id: 5, nombre: "Lavanda", precio: 5000, ruta: 'image/lavanda.jpg' },
    { id: 6, nombre: "Limoncillo", precio: 14350, ruta: 'image/limoncillo.jpg' },
    { id: 7, nombre: "Canela", precio: 4500, ruta: 'image/canela.jpg' },
    { id: 8, nombre: "Azucenas", precio: 23000, ruta: 'image/azucena.jpg' },
    { id: 9, nombre: "Citrico", precio: 1200, ruta: 'image/citrico.png' },
    { id: 10, nombre: "Eucalipto", precio: 20000, ruta: 'image/eucalipto.jpg' },
];

let suma = 0;

for (const producto of catalogo) {
    //Se crea estructura del catálogo 
    $("#catalogo").append(`<div class="catalogo_productos">
                        <div class="card" style="width: 19rem;">
                        <h2 id="titulo_card">${producto.nombre}</h2>
                        <img id="img_producto" class="card-img-top" src="${producto.ruta}"/><br>
                        <div class="card-body ">
                        <b> $ ${producto.precio}</b><br>
                        <button type="button" class="btn btn-success" id="btn${producto.id}"><i class="fas fa-plus"></i> Añadir al carrito</button>
                        </div>
                        </div>
                        </div>`);
    //Se crea el evento del botón
    $(`#btn${producto.id}`).on('click', function() {
        suma = suma + producto.precio;
        console.log(suma);
    });
}
let nombre = '';

/////////GUARDANDO USUARIO EN EL LOCAL STORAGE///////////
$(`#aceptar`).on('click', function() {
    nombre = document.getElementById('Nombre').value;
    cedula = document.getElementById('Cedula').value;
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("cedula", cedula);
    $('.modal').modal('toggle');
});

let usuario = localStorage.getItem("Nombre");
let cedulaUsuario = localStorage.getItem("Cedula");
if (usuario) {
    const fragment = document.createDocumentFragment();
    let contentUser = document.querySelector("#user");
    contentUser.textContent = `${usuario}`;
    fragment.appendChild(contentUser);
    document.body.appendChild(fragment);
}

/////////////SE IMPRIME FACTURA//////////
$('#carrito').on('click', () => {
    alert("FACTURA DE COMPRA\nCédula: " + cedulaUsuario + "\nNombre: " + usuario + "\nTotal a pagar: " + suma);
});

/////////////SE CIERRA SESIÓN///////////
$('#cierreSesion').on('click', () => {
    localStorage.removeItem("Nombre");
    localStorage.removeItem("Cedula");
});