import { userModel } from "../models/users.model.js";

// 1. Método para CREAR un usuario -> POST
const postUser = (request, response) => {
    // Acá va la lógica de la petición
    return response.json({"mensaje": "Funciona petición POST"});
}

// 2. Método para MOSTRAR todos los User -> GET
export const getAllUsers = (request, response) => {
    return response.json({"mensaje": "Funciona petición GET"});
}

// 3. Método para ACTUALIZAR un usuario -> PUT
export const putUserById = (request, response) => {
    return response.json({"mensaje": "Funciona petición PUT"});
}

// 4. Método para ELIMINAR un usuario -> DELETE
export const deleteUserById = (request, response) => {
       return response.json({"mensaje": "Funciona petición DELETE"}); 
}