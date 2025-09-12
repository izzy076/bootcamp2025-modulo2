import { userModel } from "../models/users.model.js";
import bcryptjs from "bcryptjs";

// 1. Método para CREAR un usuario -> POST
export const postUser = async (request, response) => {
    try {
        // deestructuración cuando se hace - procesar la información del usuario antes de guardarla
        const {name, username, email, age, password, role} = request.body;
        const codedPasssword = await bcryptjs.hash(password, 10)

        await userModel.create({
           name,
           username,
           email,
           age,
           password:codedPasssword,
           role 
        });

        return response.status(201).json({
            "mensaje": "Usuario creado correctamente"
        });
        
    } catch (error) {
         return response.status(400).json({
            "mensaje": "Ocurrió un error al crear un ususario",
            "error": error.message || error
        })
    }
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