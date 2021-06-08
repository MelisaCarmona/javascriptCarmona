let name;
let product;
let amount;
let price = 35000;

function initializeVariables() {
    name = prompt('Ingresa tu nombre');
    product = prompt('Ingresa nombre de la fragancia');
    amount = prompt('Ingresa cantidad a llevar');

    amount = parseInt(amount);
}


function calculateDiscount() {
    let discount = 0;
    if (amount > 5) {
        discount = 70;
    } else if (amount > 3) {
        discount = 50;
    } else if (amount > 2) {
        discount = 30;
    } else {
        discount = 0;
    }
    return discount;
}

function calculateTotal(discount) {
    let total;
    total = (price * amount) - ((price * amount) * discount / 100);
    return total;
}

function printInvoice(total, discount) {
    alert('FRAGANCE STYLE \nCliente: ' + name + '\nFragancia: ' + product + '\nPrecio Unitario: ' + price + '\nDescuento: ' + discount + '% del valor total\nTotal: ' + total);
}

initializeVariables();
let discount = calculateDiscount();
let total = calculateTotal(discount);
printInvoice(total, discount);