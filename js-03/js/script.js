// const sumarConsola = function (num1, num2) {
//   const suma = num1 + num2;
//   console.log(suma);
// };

// const sumarAlert = function (num1, num2) {
//   const suma = num1 + num2;
//   alert(suma);
// };

// ---

// const sumar = function (num1, num2) {
//   const suma = num1 + num2;
//   return suma;
// };

// ---

// const fnConsole = function (texto) {
//   console.log(texto);
// };

// const fnAlert = function (texto) {
//   alert(texto);
// };

// const sumar = function (num1, num2, callback) {
//   const suma = num1 + num2;
//   callback(suma);
// };

// sumar(7, 4, fnConsole);
// // sumar(7, 8, fnAlert);
// sumar(20, 15, console.log);

// ---

// const sumar = function (num1, num2) {
//   return num1 + num2;
// };

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;

const calculadora = (num1, num2, operacion) => operacion(num1, num2);

// const calculadora = function (num1, num2, operacion) {
//   return operacion(num1, num2);

//   //   if (operacion == "+") {
//   //     return "La suma es: " + (num1 + num2);
//   //   } else if (operacion == "-") {
//   //     return `La resta es: ${num1 - num2}`;
//   //   }

//   //   return "La operación no es reconocida";
// };

let result = calculadora(14, 3, sumar);
console.log(result);

result = calculadora(5, 3, restar);
console.log(result + 1);

result = calculadora(result, 3, multiplicar);
console.log(result);

result = calculadora(10, 2, (a, b) => a / b);
console.log(result);
