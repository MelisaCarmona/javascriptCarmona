/** Animate style */
// $("body").prepend('<h3 style="">Hello world!!!</h3>');
// $("body").prepend('<button  id="btn1">ACEPTAR</button>');

//muestra los elementos ocultos
// $("h3").show();

//Esconde el elemento
// $("h3").hide();

//misma función de show, pero tiene una transición
// $("h3").fadeIn();

//Desaparece el elemento con una transición
// $("h3").fadeOut();

//VELOCIDAD DEL FADE
// $("h3").fadeOut('fast');
// $("h3").fadeOut('slow');
// $("h3").fadeOut(4000);


//CALLBACK FADE
// $("h3").fadeOut(5000, function() {
//     $("h3").fadeIn(1000);
// });

//SLIDE DOWN
// $("#btn1").click(() => {
// alert('hola');

//funciona display none
// $("h3").slideDown("slow");

// $("h3").slideUp("slow");
// });

// $("body").prepend('<button id="btn1">Mostrar</button>');
// $("body").prepend(`<div id="div1" style="height: 120px; background: pink">
//                         <h3>¡Hola Coder!</h3>
//                         <h4>Sorpresa</h4>
//                     </div>`);
// //Usamos toggle sobre div1 en respuesta al click del botòn btn1
// $("#btn1").click(() => {
//     $("#div1").toggle("fast");
// });
// //Agregamos un parrafo con jQuery
// $("body").prepend('<p class="titulo">Code House</p>');
// //Modificamos las reglas CSS desde jQuery
// $("p").css("background-color", "yellow");
// $("p").css("width", "50%");
// $(".titulo").css({
//     "color": "#ccc",
//     "font-size": "40px",
//     "borderLeft": "5px solid #ccc"
// });
// //ANIMANDO CON jQUERY
// //Agregamos un parrafo con jQuery
// $("body").prepend('<p style="background:blue" class="titulo">Code House</p>');
// //Animamos sus propiedades CSS con animate
// $(".titulo").animate({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//     }, //1er parámetro propiedades
//     "slow", //2do parámetro duración 
//     function() { //3er parámetro callback
//         console.log("final de animación");
//     });
// //Agregamos una estructura con jQuery
// $("body").prepend(`</div>
//                         <a>Ir a contacto</a>
//                         <p style="height: 800px"></p>
//                         <section id="seccionContacto">
//                            <h4>¡Somos Coders!</h4>
//                         </section>
//                    </div>`);
// // Asociamos la animación al click en un elemento <a>
// $('a').click(function(e) {
//     e.preventDefault();
//     //Animamos sus propiedades CSS con animate
//     $('html, body').animate({
//         scrollTop: $("#seccionContacto").offset().top
//     }, 2000);
// });
// //Agreguemos un párrafo con jQuery
// $("body").prepend('<p id="p1">Coder House</p>');
// //Declaración de métodos encadenados
// $("#p1").css("color", "red")
//     .slideUp(2000)
//     .delay(1000)//detiene la animacion
//     .slideDown(2000);
// Array de objetos para agregar información al DOM.
const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
    { id: 2, nombre: "Fideo", precio: 70 },
    { id: 3, nombre: "Pan", precio: 50 },
    { id: 4, nombre: "Flan", precio: 100 }
];
// Asociamos el evento click en ready luego del DOM Generado
$(document).ready(function() {
    $(".btnComprar").click(function(e) {
        //Obtenemos hijos del padre <div> desde el target
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
        //Animaciòn de respuesta de compra
        $(e.target).parent().slideUp("slow");
    });
});
// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto ademas de los datos agregamos un botón 
    $("#app").append(`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`);
}