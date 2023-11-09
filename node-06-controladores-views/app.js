const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");

// app.use((req, res, next) => {
//   res.send("En Mantenimiento");
// });

// console.log(path.join(__dirname, "/src/views"));
// console.log(__dirname + "/public");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRoutes = require("./src/routes/mainRoutes");
app.use(mainRoutes);

app.use("/admin/productos", require("./src/routes/admin/productosRoutes"));

app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
