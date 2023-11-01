const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.urlencoded());

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/contacto.html");
});

app.post("/contacto", (req, res) => {
  console.log(req.body);
  res.send("Formulario recibido");
});

app.get("/personajes", (req, res) => {
  const buffer = fs.readFileSync(__dirname + "/characters.json");
  console.log(buffer);

  const array = JSON.parse(buffer);
  console.log(array);

  res.json(array);
});

app.get("/items/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;

  console.log(req.query);
  const coleccion = req.query.coleccion;

  res.send({ id, coleccion });
});

const PORT = 3000;

app.listen(3000, () => console.log(`http://localhost:${PORT}`));
