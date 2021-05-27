/** A continuación se hace ejemplo creando un array de elementos por medio de WHILE */

// Se inicializa variable a ingresar por el usuario
let number;

// Se inicializa array de datos ingresados por el usuario
let array_number = [];

// Se inicializa acomulador o sumatoria de los datos ingresados
let add = 0;

while (add <= 15) {
    // Se pide al usuario ingresar una edad
    number = prompt("Introduce una edad");

    // Se condiciona que debe ser par
    if (number % 2 == 0) {
        array_number.push(number);
        add = add + parseInt(number);
    }
}

console.log(array_number);
console.log('La sumatoria es igual a =', add);

//Se inicializa nuevo array
let array_age = [];
let person_name;

/** Ciclo For */
for (let i = 0; i < array_number.length; i++) {
    person_name = prompt('Quién tiene ' + array_number[i] + ' años?');
    // Se le asigna un persona a cada edad
    array_age[person_name] = array_number[i];
}

console.log(array_age);