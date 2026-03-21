import getHealthStatus from '../health.js';

describe('getHealthStatus', () => {
  test('should return "healthy" when health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
  });

  test('should return "wounded" when health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('should return "critical" when health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 5 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 0 })).toBe('critical');
  });
});
