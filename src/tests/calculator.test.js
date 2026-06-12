const c = require('../calculator');

describe('Extended calculator operations', () => {
  test('modulo: 10 % 3 => 1', () => {
    expect(c.modulo(10, 3)).toBe(1);
  });

  test('modulo: throws on division by zero', () => {
    expect(() => c.modulo(5, 0)).toThrow('Modulo by zero');
  });

  test('power: 2 ^ 8 => 256', () => {
    expect(c.power(2, 8)).toBe(256);
  });

  test('power: supports negative exponents', () => {
    expect(c.power(2, -2)).toBeCloseTo(0.25);
  });

  test('squareRoot: sqrt(16) => 4', () => {
    expect(c.squareRoot(16)).toBe(4);
  });

  test('squareRoot: non-perfect square returns float', () => {
    expect(c.squareRoot(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('squareRoot: throws on negative input', () => {
    expect(() => c.squareRoot(-1)).toThrow('Cannot take square root of negative number');
  });
});
