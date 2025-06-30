const request = require('supertest');
const app = require('../src/app');

// 1. Flujo completo de la app
test('Flujo completo: suma + resta + multiplica', async () => {
  const sumaRes = await request(app).get('/suma?a=10&b=5');
  expect(sumaRes.text).toContain('15');

  const restaRes = await request(app).get('/resta?a=10&b=2');
  expect(restaRes.text).toContain('8');

  const multRes = await request(app).get('/multiplica?a=3&b=4');
  expect(multRes.text).toContain('12');
});

// 2. Interacción con endpoint de error (división)
test('Divide entre 0 desde endpoint', async () => {
  const res = await request(app).get('/divide?a=9&b=0');
  expect(res.statusCode).toBe(400);
  expect(res.text).toBe('No se puede dividir entre cero');
});
