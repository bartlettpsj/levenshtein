const dl = require("damerau-levenshtein-js");

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('returns no distance on identical', () => {
  expect( dl.distance('aaa', 'aaa')).toBe(0);
})

test('returns no distance on empty strings', () => {
  expect( dl.distance('', '')).toBe(0);
})

test('returns -1 on nulls', () => {
  expect( dl.distance(null, null)).toBe(-1);
})

test('returns distance of 1 on single character vs empty string', () => {
  expect( dl.distance('a', '')).toBe(1);
})

test('returns distance of 5 on 5 difference characters', () => {
  expect( dl.distance('aaaaa', 'bbbbb')).toBe(5);
})

test('returns distance of 4 on 5 reverse word', () => {
  expect( dl.distance('tripy', 'ypirt')).toBe(4);
})
