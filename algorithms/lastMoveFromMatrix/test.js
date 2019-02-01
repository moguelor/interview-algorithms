const getLastMoveFromMatrix = require('./index.js');

test('Exist the function "getLastMoveFromMatrix()"', () => {
  expect(typeof getLastMoveFromMatrix).toEqual('function');
});

test('When N=1 and M=1 expect to be "R"', () => {
  expect(getLastMoveFromMatrix(1, 1)).toBe('R');
});

test('When N=2 and M=2 expect to be "L"', () => {
  expect(getLastMoveFromMatrix(2, 2)).toBe('L');
});

test('When N=3 and M=1 expect to be "D"', () => {
  expect(getLastMoveFromMatrix(3, 1)).toBe('D');
});

test('When N=3 and M=3 expect to be "R"', () => {
  expect(getLastMoveFromMatrix(3, 3)).toBe('R');
});

test('When N=35 and M=78 expect to be "R"', () => {
  expect(getLastMoveFromMatrix(35, 78)).toBe('R');
});

test('When N=127 and M=34 expect to be "U"', () => {
  expect(getLastMoveFromMatrix(127, 34)).toBe('U');
});

test('When N=1587 and M=4879 expect to be "R"', () => {
  expect(getLastMoveFromMatrix(1587, 4879)).toBe('R');
});

test('When N=87944 and M=58944 expect to be "U"', () => {
  expect(getLastMoveFromMatrix(87944, 58944)).toBe('U');
});

test('When N=156777 and M=546911 expect to be "R"', () => {
  expect(getLastMoveFromMatrix(156777, 546911)).toBe('R');
});

test('When N=612354321 and M=565432123 expect to be "D"', () => {
  expect(getLastMoveFromMatrix(612354321, 565432123)).toBe('D');
});