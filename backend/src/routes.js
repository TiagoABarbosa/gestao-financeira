const { response } = require("express");
const express = require("express");
const Routes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create
Routes.post("/items", async (request, response) => {
    const { name } = request.body;
    const items = await prisma.items.create({
        data: {
            category: "Aluguel",
            title: "Aluguel",
            value: 1200
        }
    })
    return response.status(201).json(items);
});

// Read
Routes.get("/items", async (request, response) => {
    const items = await prisma.items.findMany();
    return response.status(200).json(items);
});

// ReadOnly
Routes.get("/items/:id", async (request, response) => {
    const { id } = request.body;
    const items = await prisma.items.findUnique({ where: { id  } });
    return response.status(200).json(items);
});

// Update
Routes.put("/items", async (request, response) => {
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
            category,
            title,
            value,
        }
    });
    return response.status(200).json(todo);
});

// Delete
Routes.delete("/items/:id", async (request, response) => {
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

module.exports = Routes;