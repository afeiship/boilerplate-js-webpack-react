import fn from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    const { exchange, vacation } = fn();
    expect(exchange.length > 0).toBe(true);
    expect(vacation.length > 0).toBe(true);
  });
});
