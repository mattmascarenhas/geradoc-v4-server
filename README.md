<h1>Back-End</h1><h2>Banco de dados</h2><p>Toda a base de dados foi feita através do Prisma, usando o SQLite para armazenar os dados.</p><p>O schema é composto por três models:<strong> Client, Block, Text </strong>.</p><ul><li>Um <strong>Client </strong>pode ter vários <strong>Blocks.</strong></li><li>Um <strong>Block </strong>pode ter vários <strong>Texts.</strong></li><li><strong>Text </strong>contém uma referência não obrigatória a <strong>Blocks.</strong></li></ul><p><br></p><h2>Node.js</h2><p>Rotas criadas para o sistema:</p><ul><li><strong>Client, Block, Text </strong>- Rota <strong>get </strong>para listar um único cliente, bloco ou texto e todos os clientes, blocos ou textos.</li><li><strong>Client, Block, Text </strong>- Rota <strong>post </strong>para listar um cliente, bloco ou texto.</li><li><strong>Client, Block, Text </strong>- Rota <strong>put </strong>para editar um cliente, bloco ou texto.</li><li><strong>Client, Block, Text </strong>- Rota <strong>delete </strong>para deletar um determinado cliente, bloco ou texto(busca feita pelo id).</li><li><strong>OBS: Client, Block, Text - </strong>Para cada função citada acima, cada um possui uma rota individual.</li></ul><p><br></p><h1>


Instruções para iniciar e fazer a manutenção do sistema

npm init -y
-> criar o package.json

npm install express --save
-> instalar o express e salvar como dependencia

npm install node-dev
-> add uma linha nos scripts
-> "dev": "node-dev src/server.mjs "

adicionar no package.json { "type": "module", }
-> arquivos .js agora serao .mjs

npm install prisma -D
-> instalar o prisma

npm i @prisma/client
-> instalar o client para poder acessar os dados do BD

npx prisma init --datasource-provider sqlite
-> iniciar o prisma com o sqlite

alterar o .env
-> DATABASE_URL="file:../src/database/db.sqlite"

npx prisma migrate diff --from-schema-datamodel

npx prisma migrate dev
-> toda vez que for fazer alterações nas tabelas do BD usar o comando

npx prisma studio
-> executar o prisma studio com as tabelas
