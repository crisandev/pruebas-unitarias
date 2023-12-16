const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("Hola Mundo!, Esto es una prueba JEST");
});

app.get("/nombre-estudiante", (req, res) => {
   res.send("Cristian Eulises Sanchez Ramirez");
});

app.get("/matricula-estudiante", (req, res) => {
   res.send("2021-1899");
});

app.get("/prueba-merge", (req, res) => {
   res.send("No se hacer merge");
});


module.exports = app; 