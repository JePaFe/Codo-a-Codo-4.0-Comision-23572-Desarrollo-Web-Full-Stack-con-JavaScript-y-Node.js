const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

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

const create = (req, res) => {
  res.render("admin/create");
};

const store = (req, res) => {
  console.log(req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  if (req.file) {
    console.log(req.file, req.file.buffer, req.file.originalname);

    sharp(req.file.buffer)
      .resize(300)
      .toFile(
        path.resolve(
          __dirname,
          "../../../public/uploads/" + req.file.originalname
        )
      );
  }

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
  create,
  store,
  update,
  destroy,
};
