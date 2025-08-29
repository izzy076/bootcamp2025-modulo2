// El archivo de ejecución de nuestra aplicación
// configurar nuestro servidor y gestionar la lógica de negocio

// 1. Importar las dependencias necesarias
import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";

// 2. Configurar las depedencias que necesitemos
const app = express();
dotenv.config();
const port =process.env.PORT;
conexionMongo(); // esto es lo que hace la conexión con db


// 3. Funcionalidades que necesite agregar
app.get("/",(req,rest)=>{
  rest.send("Serer works!")
})


// 4. Levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});