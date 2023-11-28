const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Producto = sequelize.define(
  "Producto",
  {
    // productId: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    // timestamps: false,
  }
);

(async () => {
  await sequelize.sync();
  // await sequelize.sync({ force: true });
  // await sequelize.sync({ alter: true });
})();

module.exports = Producto;
