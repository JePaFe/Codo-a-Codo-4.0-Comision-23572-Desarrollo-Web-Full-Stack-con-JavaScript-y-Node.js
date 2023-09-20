// function mensajeConsole() {
//   console.log("Un mensaje");
// }

// function mensajeAlert() {
//   alert("Un mensaje");
// }

// mensajeConsole();
// mensajeAlert();

// ---

const mensaje = function () {
  return "Un mensaje";
  console.log("Esto nunca se muestra");
};

// const numero = prompt("Ingrese un numero");

const texto = mensaje();
console.log(texto);
document.write(texto);
alert(texto);
