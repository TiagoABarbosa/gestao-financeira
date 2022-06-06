const { response } = require("express");
const express = require("express");
const allTodos = [{ nome: "Teste", status: false }];
const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create
todosRoutes.post("/todos", async (request, response) => {
    const { name } = request.body;
    const todo = await prisma.items.create({
        data: {
            date: "2022-06-06",
            category: "Salário",
            title: "Teste Roger",
            value: 100
        }
    })
    return response.status(201).json(todo);
});
// Read
todosRoutes.get("/todos", async (request, response) => {
    const todos = await prisma.items.findMany();
    return response.status(200).json(todos);
});
// Update
todosRoutes.put("/todos", async (request, response) => {
    const { id, date, category, title, value } = await request.body;
    // Validar se ID existe
    if (!id) {
        return response.status(400).json("ID not informed")
    };
    // Validar se ID foi informado
    const todoAllreadyExist = await prisma.items.findUnique({ where: { id } });
    if (!todoAllreadyExist) {
        return response.status(404).json("ID not found")
    }
    const todo = await prisma.items.update({
        where: {
            id,
        },
        data: {
            date,
            category,
            title,
            value,
        }
    });
    return response.status(200).json(todo);
});

// Delete
todosRoutes.delete("/todos/:id", async (request, response) => {
    const { id } = request.params;
    const intId = parseInt(id);

    if (!intId) {
        return response.status(400).json("ID not informed")
    }
    const todoAllreadyExist = await prisma.items.findUnique({ where: { id: intId } });
    if (!todoAllreadyExist) {
        return response.status(404).json("ID not found")
    }
    await prisma.items.delete({ where: { id: intId } });
    return response.status(200).send();
});

module.exports = todosRoutes;