const request = require("supertest");
const app = require("../src/app");

test('Debería retornar "Hola Mundo!, Esto es una prueba JEST', async () => {
   const response = await request(app).get("/");
   await expect(response.text).toBe("Hola Mundo!, Esto es una prueba JEST");
});

test('Debería retornar el nombre del estudiante: "Cristian Eulises Sanchez Ramirez', async () => {
   const response = await request(app).get("/nombre-estudiante");
   await expect(response.text).toBe("Cristian Eulises Sanchez Ramirez");
});

test('Debería retornar la matrícula del estudiante: "2021-1899', async () => {
   const response = await request(app).get("/matricula-estudiante");
   await expect(response.text).toBe("2021-1899");
});

test('Debe poder Poder realizar el merge', async () => {
   const response = await request(app).get("/matricula-estudiante");
   await expect(response.text).toBe("Se realizó el merge correctamente");
});

jest.useFakeTimers();
