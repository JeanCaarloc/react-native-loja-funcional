// dbConfig.js
const sql = require('mssql');

const dbConfig = {
  user: 'SA',
  password: 'BemVindo!',
  server: '06LAB01PC12', // endereço do servidor
  database: 'loja_cosmeticos',
  options: {
    encrypt: false, // Use true para Azure, false para servidores locais
    enableArithAbort: true,
  },
};

async function connectToDatabase() {
  try {
    await sql.connect(dbConfig);
    console.log("Conexão bem-sucedida com o banco de dados!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

module.exports = { connectToDatabase, sql };
