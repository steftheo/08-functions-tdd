QUnit.module('Application');

test('It can replace an item in the array', function(assert) {
  const a = [1, 2];
  const b = [9, 'foo', 12];
  const c = replaceInArray(a, 0, 2000);
  const d = replaceInArray(b, 1, 'bar');

  assert.deepEqual(c, [2000, 2]);
  assert.deepEqual(d, [9, 'bar', 12]);
  assert.notEqual(d, c, 'The array c should not be modified');
});

test(`A game can be created`, function(assert) {
  const a = createGame(1, 1);
  const b = createGame(5, 2);

  assert.deepEqual(a, [[false]]);
  assert.deepEqual(b, [[false, false], [false, false], [false, false], [false, false], [false, false]]);
});

test(`A tile can be flipped`, function(assert) {
  const a = [[true, false], [false, false]];
  const b = [[false, false], [false, false]];
  const c = [[false, false], [true, false]];

  assert.deepEqual(flipTile(a, 1, 0), [[true, false], [true, false]]);
  assert.notEqual(a, [[true, false], [true, false]], 'The array should not be modified');
  assert.deepEqual(flipTile(b, 0, 0), [[true, false], [false, false]]);
});

test(`It knows how to find its neighbors`, function(assert) {
  const arr = [[false, false, true], [false, true, false], [true, false, false]];

  assert.deepEqual(getNeighbors(arr, 0, 0), [undefined, undefined, undefined, undefined, false, undefined, false, true]);
  assert.deepEqual(getNeighbors(arr, 1, 1), [false, false, true, false, false, true, false, false]);
});

test(`It knows how to run a game`, function(assert) {
  const arr = [[false, false, true], [false, true, false], [true, false, false]];

  assert.deepEqual(runGame(arr), [[false, false, false], [false, true, false], [false, false, false]])
});
