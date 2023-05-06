CREATE DATABASE CBA_FLY;
USE CBA_FLY;

-- Creamos la tabla de usuarios
CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre_completo VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);



-- Creamos la tabla de vuelos
CREATE TABLE vuelos (
    id INT NOT NULL AUTO_INCREMENT,
    origen VARCHAR(100) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    hora_salida DATETIME NOT NULL,
    hora_llegada DATETIME NOT NULL,
    duracion INT NOT NULL,
    numero_vuelo VARCHAR(100) NOT NULL,
    tipo_avion VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- Creamos la tabla de asientos
CREATE TABLE asientos (
    id INT NOT NULL AUTO_INCREMENT,
    numero_asiento INT NOT NULL,
    clase VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    disponible BOOLEAN NOT NULL DEFAULT TRUE,
    id_vuelo INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_vuelo) REFERENCES vuelos(id)
);

-- Creamos la tabla de carrito de compras
CREATE TABLE carrito_compras (
    id_usuario INT NOT NULL,
    id_vuelo INT NOT NULL,
    cantidad_asientos INT NOT NULL,
    PRIMARY KEY (id_usuario, id_vuelo),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_vuelo) REFERENCES vuelos(id)
);

-- Creamos la tabla de pagos
CREATE TABLE pagos (
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    numero_tarjeta VARCHAR(16) NOT NULL,
    fecha_expiracion DATE NOT NULL,
    codigo_seguridad VARCHAR(4) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

-- Creamos la tabla de compras
CREATE TABLE compras (
    id INT NOT NULL AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_vuelo INT NOT NULL,
    cantidad_asientos INT NOT NULL,
    precio_total DECIMAL(10,2) NOT NULL,
    fecha_compra DATETIME NOT NULL,
    numero_tarjeta VARCHAR(16) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_vuelo) REFERENCES vuelos(id)
);
