npm init -y
-> criar o package.json

npm install express --save
-> instalar o express e salvar como dependencia

npm install node-dev
-> add uma linha nos scripts
-> "dev": "node-dev src/server.mjs "

adicionar no package.json { "type": "module", }
-> arquivos .js agora serao .mjs

npm install prisma -Dprims
-> instalar o prisma

npx prisma init --datasource-provider sqlite
-> iniciar o prisma com o sqlite

alterar o .env
-> DATABASE_URL="file:../src/database/db.sqlite"

npx prisma migrate diff --from-schema-datamodel

npx prisma migrate dev
-> toda vez que for fazer alterações nas tabelas do BD usar o comando

npx prisma studio
-> executar o prisma studio com as tabelas
