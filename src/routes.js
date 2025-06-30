const express = require('express');
const router = express.Router();
const { suma, resta, multiplica, divide } = require('./funciones');

router.get('/', (req, res) => {
  res.send(`
    <h1>Calculadora CI/CD</h1>
    <p>Endpoints: /suma, /resta, /multiplica, /divide</p>
    <p>Ejemplo: /suma?a=5&b=3</p>
  `);
});

router.get('/suma', (req, res) => {
  const { a, b } = req.query;
  res.send(`Resultado: ${suma(Number(a), Number(b))}`);
});

router.get('/resta', (req, res) => {
  const { a, b } = req.query;
  res.send(`Resultado: ${resta(Number(a), Number(b))}`);
});

router.get('/multiplica', (req, res) => {
  const { a, b } = req.query;
  res.send(`Resultado: ${multiplica(Number(a), Number(b))}`);
});

router.get('/divide', (req, res) => {
  const { a, b } = req.query;
  try {
    res.send(`Resultado: ${divide(Number(a), Number(b))}`);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
