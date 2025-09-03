// El archivo de ejecución de nuestra aplicación
// configurar nuestro servidor y gestionar la lógica de negocio

// 1. Importar las dependencias necesarias
import express from "express";
import dotenv from "dotenv";
import { conexionMongo } from "./src/config/db.js";
import { productRouter } from "./src/routes/products.routes.js";
import { userRouter } from "./src/routes/users.routes.js";

// 2. Configurar las depedencias que necesitemos
const app = express();
dotenv.config();
const port =process.env.PORT;
conexionMongo(); // esto es lo que hace la conexión con db

// 3. Funcionalidades que necesite agregar
app.get("/",(req,rest)=>{
  rest.send("Serer works!")
});

app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter);


// 4. Levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});