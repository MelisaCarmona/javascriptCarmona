let number;
let array_number = [];
let add = 0;

while (add <= 15) {
    number = prompt("Introduce un número");
    array_number.push(number);
    add = add + parseInt(number);
}

console.log(array_number);
console.log('La sumatoria es igual a =', add);