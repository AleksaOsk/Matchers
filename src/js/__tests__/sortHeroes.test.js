import sortHeroes from '../sortHeroes.js';

describe('sortHeroes', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortHeroes(heroes);

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sorted).toEqual(expected);
  });

  test('should not mutate original array', () => {
    const original = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];
    const copy = [...original];

    sortHeroes(original);

    expect(original).toEqual(copy);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 50 }];
    expect(sortHeroes(heroes)).toEqual([{ name: 'маг', health: 50 }]);
  });

  test('should handle empty array', () => {
    expect(sortHeroes([])).toEqual([]);
  });

  test('should handle equal health values', () => {
    const heroes = [
      { name: 'A', health: 50 },
      { name: 'B', health: 50 },
    ];
    const result = sortHeroes(heroes);
    expect(result).toHaveLength(2);
    expect(result[0].health).toBe(50);
    expect(result[1].health).toBe(50);
  });
});
