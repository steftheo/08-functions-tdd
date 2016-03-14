QUnit.module(`Conway's Game of Life`);

test(`A cell knows how many neighbors are alive`, function(assert) {
  const a = aliveNeighbors([false, false, false, false, false, false, false, false]);
  const b = aliveNeighbors([false, true, false, false, true, false, false, false]);
  const c = aliveNeighbors([false, true, false, true, true, false, false, false]);
  const d = aliveNeighbors([true, true, true, false, true, false, false, false]);

  assert.equal(a, 0, `All dead neighbors`);
  assert.equal(b, 2, `Two alive neighbors`);
  assert.equal(c, 3, `Three alive neighbors`);
  assert.equal(d, 4, `Four alive neighbors`);
});

test(`A cell knows the rules if it's alive`, function(assert) {
  const a = aliveEh([false, false, false, false, false, false, false, false]);
  const b = aliveEh([false, true, false, false, true, false, false, false]);
  const c = aliveEh([false, true, false, true, true, false, false, false]);
  const d = aliveEh([true, true, true, false, true, false, false, false]);

  assert.equal(a, false, `A cell dies of underpopulation with`);
  assert.equal(b, true, `A stays alive in harmony`);
  assert.equal(c, true, `A stays alive in harmony`);
  assert.equal(d, false, `A cell dies of overpopulation with`);
});

test(`A cell knows the rules if it's dead`, function(assert) {
  const a = reviveEh([false, false, false, false, false, false, false, false]);
  const b = reviveEh([false, true, false, false, true, false, false, false]);
  const c = reviveEh([false, true, false, true, true, false, false, false]);
  const d = reviveEh([true, true, true, false, true, false, false, false]);

  assert.equal(a, false, `A cell does not revive`);
  assert.equal(b, false, `A cell does not revive`);
  assert.equal(c, true, `A cell revives with a little help from 3 of its friends`);
  assert.equal(d, false, `A cell does not revive`);
});
