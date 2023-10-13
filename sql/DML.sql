INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `imagen`, `precio`) 
VALUES (null, 'Producto 1', null, null, 1000);

INSERT INTO `productos` VALUES (null, 'Producto 2', null, null, 2000);

INSERT INTO `productos` (`nombre`, `precio`) 
VALUES ('Producto 3', 3000);

INSERT INTO `productos` (`id`, `nombre`, `precio`) 
VALUES (10, 'Producto 10', 10000);

INSERT INTO `usuarios` (`id`, `email`, `password`) 
VALUES (NULL, 'x@x.com', '1234'), (NULL, 'y@y.com', '5678');

---

SELECT * FROM `productos`

SELECT id, nombre, precio FROM `productos`

SELECT id, nombre, precio 
FROM `productos`
WHERE precio >= 2000;

SELECT id, nombre, precio 
FROM `productos`
WHERE precio >= 2000 
AND precio < 3500;

SELECT id, nombre, precio 
FROM `productos`
LIMIT 2;

SELECT id, nombre, precio 
FROM `productos`
LIMIT 2, 2;

SELECT * 
FROM `productos`
ORDER BY precio;

SELECT * 
FROM `productos`
ORDER BY nombre DESC, precio ASC;

---

UPDATE productos
SET precio = 4000, nombre = 'Producto 4B'
WHERE id = 4;

SELECT * 
FROM `productos`
WHERE id = 4

---

DELETE FROM `productos` 
WHERE id = 3;

---

INSERT INTO `profiles` (`id`, `nombre`, `apellido`, `usuario_id`) 
VALUES (NULL, 'Juan', 'Perez', '1');

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `imagen`, `precio`, `categoria_id`) VALUES
(1, 'Producto 1', NULL, NULL, 1000, 1),
(2, 'Producto 2', NULL, NULL, 5000, 2),
(3, 'Producto 3', NULL, NULL, 3000, 1),
(4, 'Producto 4B', NULL, NULL, 4000, 1);

--- 

SELECT productos.nombre AS producto, precio, categorias.nombre AS categoria
FROM productos 
INNER JOIN categorias ON categorias.id = productos.categoria_id;

SELECT * 
FROM `usuarios` 
INNER JOIN profiles ON profiles.usuario_id = usuarios.id;

SELECT * 
FROM `usuarios` 
LEFT JOIN profiles ON profiles.usuario_id = usuarios.id;