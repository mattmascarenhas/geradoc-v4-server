import express from "express";

const app = express();
const port = 3333;

app.get("/clients", (req, res) => {
  return res.json("[retornando]");
});

app.listen(port);
