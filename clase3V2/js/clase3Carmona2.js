/**
 * Se quiere ingresar los nombres de 5 personas y posteriormente asignarles una edad
 */

// Se inicializa un contador
let count = 1;
let array_name = [];

/** Ciclo while: se usa con la finalidad de pedir los 5 nombres*/
while (count <= 5) {
    // Se inicializa la variable que va a contener el nombre
    let name = prompt('Ingresa el nombre de la persona número ' + count);

    //Se configura el nombre para que tenga la primera en mayúscula
    name = name.toLocaleUpperCase();

    //Se anexa al array
    if (name && name.length > 0) {
        array_name.push(name);

        // Se imprime el nombre
        console.log(name);

    }

    // Se aumenta el contador
    count++;
}

// Se imprime el array
console.log(array_name);

/** Ciclo for para asignar las edades 
 * NOTA: no es necesario hacerlo de esta forma, pero se hace para poner en práctica la lógica de  ambos bucles
 */

for (let i = 0; i < array_name.length; i++) {
    let age = prompt('Cuál es la edad de ' + array_name[i] + ' ?');

    // Se imprime el nombre con su respectiva edad
    console.log(array_name[i] + ' tiene ' + age + ' años');
}