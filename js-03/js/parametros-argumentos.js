// function saludar() {
//   return "Hola";
// }

// let hola = "Hola ";

// const saludar = function (nombre) {
//   let texto = hola + nombre;
//   return texto;
// };

// // console.log(nombre);
// // console.log(texto);
// console.log(hola);

// let saludo = saludar("Juan");
// console.log(saludo);

// saludo = saludar("Maria");
// console.log(saludo);

// ---

const nombreCompleto = function (nombre, apellido) {
  const nombre_completo = `${nombre} ${apellido}`;
  //   const nombre_completo = nombre + " " + apellido;
  return nombre_completo;
};

const nombre_completo = nombreCompleto("Juan", "Perez");
console.log(nombre_completo);
