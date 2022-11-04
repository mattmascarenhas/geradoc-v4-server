import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const port = 3333;
//fazer com que o express entenda json
app.use(express.json());
/*=====================CLIENT======================= */
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
    return res.json(updateClient);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
/*=====================BLOCK======================= */
//rota para listar os blocos
app.get("/blocks", async (req, res) => {
  const blocks = await prisma.block.findMany();
  try {
    return res.status(201).json(blocks);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para criar um block
app.post("/clients/:id/blocks", async (req, res) => {
  const idClient = req.params.id;
  const body = req.body;

  const block = await prisma.block.create({
    data: {
      clientId: idClient,
      titulo: body.titulo,
      texto: body.texto,
    },
  });
  try {
    return res.status(201).json(block);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para deletar um block
app.delete("/blocks/:id", async (req, res) => {
  const idClient = req.params.id;
  const deleteBlock = await prisma.block.delete({
    where: {
      id: idClient,
    },
  });
  try {
    return res.json("Block Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para editar um block
app.put("/block/:id", async (req, res) => {
  const idBlock = req.params.id;
  const body = req.body;

  const updateBlock = await prisma.block.update({
    where: {
      id: idBlock,
    },
    data: {
      titulo: body.titulo,
      texto: body.texto,
    },
  });
  try {
    return res.json(updateBlock);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
/*=====================TEXT======================= */
//rota para listar os TEXTS
app.get("/texts", async (req, res) => {
  const texts = await prisma.text.findMany();
  try {
    return res.status(201).json(texts);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para criar um text
app.post("/texts", async (req, res) => {
  const body = req.body;

  const text = await prisma.text.create({
    data: {
      titulo: body.titulo,
      texto: body.texto,
    },
  });
  try {
    return res.status(201).json(text);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para deletar um text
app.delete("/texts/:id", async (req, res) => {
  const idText = req.params.id;
  const deleteBlock = await prisma.text.delete({
    where: {
      id: idText,
    },
  });
  try {
    return res.json("Text Deleted!");
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
});
//rota para editar um block
app.put("/texts/:id", async (req, res) => {
  const idText = req.params.id;
  const body = req.body;

  const updateText = await prisma.text.update({
    where: {
      id: idText,
    },
    data: {
      titulo: body.titulo,
      texto: body.texto,
    },
  });
  try {
    return res.json(updateText);
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
