const express = require("express");
const router = express.Router();

// CRUD
// Create, Read, Update, Delete

router.get("/", (req, res) => {
  res.send("Admin Listado de Productos");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("Admin Detalle de Producto");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("Admin Crear Producto");
});

router.put("/:id", (req, res) => {
  console.log(req.body, req.params);
  res.send("Admin Modificar Producto");
});

router.delete("/:id", (req, res) => {
  console.log(req.params);
  res.send("Admin Borrar Producto");
});

module.exports = router;
