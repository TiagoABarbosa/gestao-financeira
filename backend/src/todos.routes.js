const { response } = require("express");
const express = require("express");
const allTodos = [{ nome: "Teste", status: false }];
const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create
todosRoutes.post("/todos", (request, response) => {
    const { name } = request.body;
    allTodos.push({ name, status: false });
    return response.status(201).json(allTodos);
});
// Read
todosRoutes.get("/todos", (request, response) => {
    return response.status(200).json(allTodos);
});
// Update

// Delete

module.exports = todosRoutes;