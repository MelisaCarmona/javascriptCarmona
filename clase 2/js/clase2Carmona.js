// Se ingresa la palabra
let product = prompt('Ingresa un producto de 8 caracteres');

// Se obtiene el tamaño de la palabra ingresada
let product_length = product.length;

// Se parametriza que el tamaño no puede ser mayor a 8
if (product.length > 8) {
    alert('El producto ' + product + ' contiene ' + product_length + ' y no debe superar 8 caracteres');

    // Si la validación es cierta la página se auto recargar
    throw ('Producto inválido');
} else {
    console.log('El producto ingresado tiene ' + product_length + ' caracteres');
}

// Ingresar precio
let price = prompt('Ingresa el precio');

// Se inicializa el total
let total;

// Variable descuento
let discount;

// Se convierte el precio a un valor tipo float
price = parseFloat(price);


if (price == 1000000 || price == 1500000) {
    discount = 100;
} else if (price >= 200000 && price < 500000) {
    discount = 50;
} else if (price >= 100000 && price < 200000) {
    discount = 25;
} else if (price < 100000) {
    discount = 5;
} else {
    discount = 0;
}
// Se imprime el descuento
console.log('Descuento : ' + discount + '%');

// Se calcula el total en base al descuento
total = price - (price * discount / 100);
console.log('Total $' + price);
//Se imprime el valor total
alert('Este es el valor total $' + total + ' con un descuento de ' + discount + '%');