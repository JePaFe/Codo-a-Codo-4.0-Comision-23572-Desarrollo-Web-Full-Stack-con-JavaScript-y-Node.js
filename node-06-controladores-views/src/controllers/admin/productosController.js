const index = (req, res) => {
  const items = [
    { nombre: "Item 1" },
    { nombre: "Item 2" },
    { nombre: "Item 3" },
  ];
  res.render("admin/index", { nombre: "Producto 1", items });
};

const show = (req, res) => {
  console.log(req.params);
  res.send("Admin Detalle de Producto");
};

const store = (req, res) => {
  console.log(req.body);
  res.send("Admin Crear Producto");
};

const update = (req, res) => {
  console.log(req.body, req.params);
  res.send("Admin Modificar Producto");
};

const destroy = (req, res) => {
  console.log(req.params);
  res.send("Admin Borrar Producto");
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
