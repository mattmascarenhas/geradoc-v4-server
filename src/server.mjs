import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const port = 3333;
//fazer com que o express entenda json
app.use(express.json());

//rota para listar os clientes
app.get("/clients", async (req, res) => {
  const clients = await prisma.client.findMany();
  try {
    return res.status(201).json(clients);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para criar um client
app.post("/clients", async (req, res) => {
  const body = req.body;

  const client = await prisma.client.create({
    data: {
      nome: body.nome,
      cpf: body.cpf,
      rg: body.rg,
      nacionalidade: body.nacionalidade,
      estadoCivil: body.estadoCivil,
      orgaoEmissor: body.orgaoEmissor,
      endereco: body.endereco,
      cidade: body.cidade,
      estado: body.estado,
      cep: body.cep,
      numero: body.numero,
      telefone: body.telefone,
      email: body.email,
      profissao: body.profissao,
    },
  });
  try {
    return res.status(201).json(client);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para deletar um client
app.delete("/client/:id", async (req, res) => {
  const idClient = req.params.id;
  const deleteClient = await prisma.client.delete({
    where: {
      id: idClient,
    },
  });
  try {
    return res.json("Client Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para editar um client
app.put("/client/:id", async (req, res) => {
  const idClient = req.params.id;
  const body = req.body;

  const updateClient = await prisma.client.update({
    where: {
      id: idClient,
    },
    data: {
      nome: body.nome,
      cpf: body.cpf,
      rg: body.rg,
      nacionalidade: body.nacionalidade,
      estadoCivil: body.estadoCivil,
      orgaoEmissor: body.orgaoEmissor,
      endereco: body.endereco,
      cidade: body.cidade,
      estado: body.estado,
      cep: body.cep,
      numero: body.numero,
      telefone: body.telefone,
      email: body.email,
      profissao: body.profissao,
    },
  });
  try {
    return res.json("Client Updated!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});

app.listen(port);

//get - buscar informação
//post - criar uma informação
//put - editar uma informação por completo
//patch - modificar apenas uma parte da informação
//delete - deletar uma informação
