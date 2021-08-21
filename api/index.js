const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => console.log(`A API está funionando na porta ${port}`));

app.get("/teste", (req, res) => res.send({ Mensagem: "teste" }).status(200));

module.exports = app;
