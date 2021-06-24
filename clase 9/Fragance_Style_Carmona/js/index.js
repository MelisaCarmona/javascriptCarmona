let arrayCompra = [];

let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", crearArray);

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularPrecio);

function crearArray() {

    let fragancia = document.getElementById("fragancia");
    let precio = document.getElementById("precio");

    if (fragancia.value != '' && precio.value != '') {
        let objectCompra = { 'fragancia': fragancia.value, 'precio': precio.value };
        arrayCompra.push(objectCompra);
    }

    fragancia.value = '';
    precio.value = '';

}

function calcularPrecio() {
    let acom = 0;
    for (let i = 0; i < arrayCompra.length; i++) {
        acom = acom + parseFloat(arrayCompra[i]['precio']);
    }
    let total = document.createElement("div");
    total.innerHTML = `<h3>Total a pagar ${acom}</h3>`;
    document.body.appendChild(total);


}