// El archivo de ejecución de nuestra aplicación
// configurar nuestro servidor y gestionar la lógica de negocio

// 1. Importar las dependencias necesarias
import express from "express";



// 2. Configurar las depedencias que necesitemos
const app = express();
const port = 3000;


// 3. Funcionalidades que necesite agregar
app.get("/",(req,rest)=>{
  rest.send("Serer works!")
})


// 4. Levantar el servidor //3000, 9000
app.listen(port, ()=>{
  console.log(`El servidor está ejecutándose en http://localhost:${port}`)
});