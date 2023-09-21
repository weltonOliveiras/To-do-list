const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Minha lista</h1>');
});

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
});

//Para resolver o erro non.js
import("./module.js")
  .then(module => {
    // utilize o module aqui
  })
  .catch(err => {
    // tratamento de erro
  });