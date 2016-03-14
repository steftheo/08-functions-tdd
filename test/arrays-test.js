QUnit.module(`Array helpers`);

test(`It can check first values`, function(assert) {
  const a = sameFirst(['b', true], ['b', true]);
  const b = sameFirst(['b', true], ['b', false]);
  const c = sameFirst(['d', true], ['b', true]);
  const d = sameFirst(['d', true], ['b', false]);
  const e = sameFirst(['d', true], ['c', false, 'x']);

  assert.equal(a, true);
  assert.equal(b, true);
  assert.equal(c, false);
  assert.equal(d, false);
  assert.equal(e, false);
});

test(`It can check deep equal`, function(assert) {
  const a = deepEquals(['b', true], ['b', true]);
  const b = deepEquals(['b', true], ['b', false]);
  const c = deepEquals([2, 7], [2, 7]);
  const d = deepEquals(['d', true], ['z', true]);
  const e = deepEquals(['d', true], ['d', true, 'x']);

  assert.equal(a, true);
  assert.equal(b, false);
  assert.equal(c, true);
  assert.equal(d, false);
  assert.equal(e, false);
});
