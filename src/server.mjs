import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const port = 3333;

//rota para listar os clientes
app.get("/clients", async (req, res) => {
  const clients = await prisma.client.findMany();
  try {
    return res.json(clients);
  } catch (err) {
    response.status(500).json({ erro: err.message });
  }
});

app.listen(port);
