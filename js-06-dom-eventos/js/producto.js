const productos = [
  { id: 1, nombre: "Producto Nro 1", precio: 100 },
  { id: 2, nombre: "Producto Nro 2", precio: 75 },
  { id: 3, nombre: "Producto Nro 3", precio: 150 },
];

const id = 3;

const producto = productos.find((producto) => producto.id == id);

const h1 = document.querySelector("h1");
const p = document.querySelector("p");

h1.textContent = producto.nombre;
p.textContent = "$ " + producto.precio;
