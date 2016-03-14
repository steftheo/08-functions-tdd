QUnit.module(`Conway's Game of Life`);

test('A cell knows the rules', function(assert) {
  const a = aliveEh([false, false, false, false, false, false, false, false]);
  const b = aliveEh([false, true, false, false, true, false, false, false]);
  const c = aliveEh([false, true, false, true, true, false, false, false]);
  const d = aliveEh([true, true, true, false, true, false, false, false]);

  assert.equal(a, false, 'A cell dies of underpopulation with');
  assert.equal(b, false, 'A stays alive in harmony');
  assert.equal(c, false, 'A stays alive in harmony');
  assert.equal(d, false, 'A cell dies of overpopulation with');
});
