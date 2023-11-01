const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hola Express</h1>");
});

app.get("/contacto", (req, res) => {
  res.send("<h1>Contacto</h1>");
});

app.get("/nosotros", (req, res) => {
  res.sendFile(__dirname + "/nosotros.html");
});

const PORT = 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
