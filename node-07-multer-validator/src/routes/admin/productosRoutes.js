const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const { body } = require("express-validator");

const validations = [
  body("nombre")
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Tiene que tener 3 caracteres")
    .escape(),
];

const controller = require("../../controllers/admin/productosController");

// CRUD
// Create, Read, Update, Delete

router.get("/create", controller.create);
router.post("/", upload.single("imagen"), validations, controller.store);

router.get("/", controller.index);
router.get("/:id", controller.show);

router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
