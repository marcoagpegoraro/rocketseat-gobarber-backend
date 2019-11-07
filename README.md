# rocketseat-gobarber-backend

# Parte 1

npm add express
npm add nodemon sucrase -D
  criar arquivo nodemon.json especificando que é pra rodar com o sucrase,
  dps ir no package json e colocar 'nodemon src/server.js'

npm add sequelize
npm add sequelize-cli -D
npm add pg pg-hstore
npx sequelize migration:create --name=create-user
npx sequelize db:migrate

npm add bcryptjs // hash senha
npm add jsonwebtoken

npm add yup

# Parte 2

npm add multer