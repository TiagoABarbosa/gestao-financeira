const express = require("express");
const todosRoutes = require("./todos.routes");
const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/health", (req, res) => {
    return res.json("Running");
});

app.listen(5000, () => console.log("Server running in port 5000"))

