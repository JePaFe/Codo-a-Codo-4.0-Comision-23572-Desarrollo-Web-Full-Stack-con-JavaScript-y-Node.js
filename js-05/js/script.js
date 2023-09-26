const numeros = [4, 2, 8, 5];

// //                                19
// const total = numeros.reduce((acumulador, numero) => {
//   return (acumulador += numero);
// }, 0);

// console.log(total);

// ---

let result = numeros.every((numero) => numero > 1);
console.log("Every", result);

result = numeros.every((numero) => numero > 3);
console.log("Every", result);

result = numeros.some((numero) => numero > 3);
console.log("Some", result);

result = numeros.some((numero) => numero > 10);
console.log("Some", result);
