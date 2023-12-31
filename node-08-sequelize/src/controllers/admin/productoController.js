const path = require("path");
const sharp = require("sharp");

const { validationResult } = require("express-validator");

const model = require("../../models/Producto");

const index = async (req, res) => {
  try {
    const productos = await model.findAll();
    // console.log(productos);
    res.render("admin/index", { productos });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const create = (req, res) => {
  res.render("admin/create");
};

const store = (req, res) => {
  console.log(req.body, req.file);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("admin/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  if (req.file) {
    sharp(req.file.buffer)
      .resize(300)
      .toFile(path.resolve(__dirname, "../../../public/uploads/image.jpg"));
  }

  res.send("Crear Producto");
};

const update = (req, res) => {
  console.log(req.params, req.body);
  res.send("Producto modificado");
};

const destroy = (req, res) => {
  console.log(req.params);
  res.send("Producto borrado");
};

module.exports = {
  index,
  create,
  store,
  update,
  destroy,
};
