// // Elemento:     1  2  3
// const numeros = [5, 3, 9];
// // Indice:       0  1  2

// const num = numeros[1];

// const arreglo = [1, "Juan", true, [1, 2, 45]];
// const subArreglo = arreglo[3];

// const num1 = subArreglo[2];
// const num2 = arreglo[3][2];

// console.log(arreglo.at(2));

// ---

const user = {
  id: 1,
  nombre: "Juan",
  apellido: "Perez",
};

const usuario = [1, "Juan", "Perez"];

console.log(user.nombre);
console.log(user["nombre"]);

console.log(usuario[1]);

// console.log(usuario.length);

//             3
usuario[usuario.length] = 98765432;
//                     4 - 1 = 3
console.log(usuario[usuario.length - 1]);

console.log(usuario.at(-1));
