const { sum, sum10 } = require('../index');

test('adds 1 + 2 equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 10 equal 11', () => {
  expect(sum10(1)).toBe(11);
});
