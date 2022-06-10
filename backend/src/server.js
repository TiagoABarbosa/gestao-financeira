const express = require("express");
const cors = require("cors");
const Routes = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(Routes);

app.get("/health", (req, res) => {
    return res.json("Running");
});

app.listen(5000, () => console.log("Server running in port 5000"))

