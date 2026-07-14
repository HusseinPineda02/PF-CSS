CREATE DATABASE IF NOT EXISTS marketplace;
USE marketplace;

CREATE TABLE productos(

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    categoria VARCHAR(50),
    vendedor VARCHAR(100),
    precio DECIMAL(10,2),
    imagen VARCHAR(100),
    descripcion TEXT

);

INSERT INTO productos(nombre,categoria,vendedor,precio,imagen,descripcion)
VALUES
('Laptop Lenovo','Tecnología','Andrea',1850,'img/producto1.jpg','Laptop Ryzen 5, 16GB RAM, SSD 512GB.'),
('Calculadora Casio','Calculadoras','Diego',90,'img/producto2.jpg','Calculadora científica Casio.'),
('Libro de Física','Libros','María',45,'img/producto3.jpg','Libro universitario de Física.'),
('Mochila','Accesorios','Carlos',80,'img/producto4.jpg','Mochila universitaria.'),
('Tablet Samsung','Tecnología','José',550,'img/producto5.jpg','Tablet Samsung.'),
('Audífonos Bluetooth','Accesorios','Lucía',75,'img/producto6.jpg','Audífonos inalámbricos.'),
('Guitarra','Instrumentos','Pedro',400,'img/producto7.jpg','Guitarra en excelente estado.'),
('Mouse Logitech','Tecnología','Daniela',60,'img/producto8.jpg','Mouse Logitech.');

CREATE TABLE usuarios(

    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80),
    usuario VARCHAR(50) UNIQUE,
    password VARCHAR(50),
    rol VARCHAR(20)

);

INSERT INTO usuarios(nombre,usuario,password,rol)
VALUES
('Administrador','admin','1234','ADMIN'),
('Emmanuel','usuario','1234','USUARIO');