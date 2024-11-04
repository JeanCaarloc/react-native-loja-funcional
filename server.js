const express = require('express');
const { connectToDatabase, sql } = require('./dbConfig');
const app = express();

app.get('/produtos', async (req, res) => {
  try {
    await connectToDatabase();
    const result = await sql.query`SELECT * FROM Produtos`;
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send('Erro ao buscar produtos');
  }
});

app.listen(3000, () => console.log('API rodando na porta 3000'));
