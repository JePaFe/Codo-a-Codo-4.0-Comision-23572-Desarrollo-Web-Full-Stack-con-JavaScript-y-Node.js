// const numeros = [10, 3, 90, 7, 5, 20, 2];

// function iterar(numero) {
//   console.log(numero);
// }

// numeros.forEach(iterar);

// numeros.forEach(numero => console.log(numero));

// const cuadrado = numeros.map((numero) => numero * numero);

// const numerosFiltrados = numeros.filter((numero) => numero > 0);

// ---

const productos = [
  { id: 1, nombre: "Producto 1" },
  { id: 2, nombre: "Producto 2", oferta: true },
  { id: 3, nombre: "Producto 3" },
];

// const producto = productos.find(function (producto) {
//   if (producto.id == 2) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const producto = productos.find(function (producto) {
//   if (producto.id == 2) {
//     return true;
//   }
//   return false;
// });

// const producto = productos.find(function (producto) {
//   return producto.id == 2;
// });

const producto = productos.find(
  (producto) => producto.id == 2 && producto.oferta
);

// if (producto == undefined) {
//   console.log("No se encontró el producto");
// } else {
//   console.log(producto);
// }

// undefined, null, 0, '' = false
if (producto) {
  console.log(producto);
} else {
  console.log("No se encontró el producto");
}
