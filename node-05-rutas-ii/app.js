const express = require("express");
const app = express();
const methodOverride = require("method-override");

// app.use((req, res, next) => {
//   res.send("En Mantenimiento");
// });

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRoutes = require("./routes/mainRoutes");
app.use(mainRoutes);

app.use("/admin/productos", require("./routes/adminProductosRoutes"));

app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
