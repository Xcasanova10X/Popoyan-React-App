CREATE DATABASE popoyanPruebaDB

CREATE TABLE Pokemon(
    Id SERIAL PRIMARY KEY,
    Tipo VARCHAR(255) UNIQUE,
    Nombre VARCHAR(255),
    CadenaEvolucion VARCHAR(255)
);