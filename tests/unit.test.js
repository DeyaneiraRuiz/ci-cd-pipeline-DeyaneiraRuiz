const { suma, resta, multiplica, divide } = require('../src/funciones');

// 1. Función suma
test('Función suma: 5 + 3 = 8', () => {
  expect(suma(5, 3)).toBe(8);
});

// 2. Función resta
test('Función resta: 10 - 7 = 3', () => {
  expect(resta(10, 7)).toBe(3);
});

// 3. Función multiplicación
test('Función multiplica: 4 * 3 = 12', () => {
  expect(multiplica(4, 3)).toBe(12);
});

// 4. Función división
test('Función divide: 20 / 4 = 5', () => {
  expect(divide(20, 4)).toBe(5);
});

// 5. División por cero (manejo de error)
test('Función divide: error al dividir entre 0', () => {
  expect(() => divide(10, 0)).toThrow('No se puede dividir entre cero');
});
