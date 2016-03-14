QUnit.module('Blackjack Bot');

test('A bot knows a card value', function(assert) {
  const ace = cardValue('ace');
  const five = cardValue('5');
  const nine = cardValue('9');
  const ten = cardValue('10');
  const jack = cardValue('jack');
  const queen = cardValue('queen');

  assert.equal(ace, 11, 'A bot should know "ace" is equal to 11');
  assert.equal(five, 5, 'A bot should know "fiv" is equal to 5');
  assert.equal(nine, 9, 'A bot should know "nin" is equal to 9');
  assert.equal(ten, 10, 'A bot should know "ten" is equal to 10');
  assert.equal(jack, 10, 'A bot should know "jack" is equal to 10');
  assert.equal(queen, 10, 'A bot should know "queen" is equal to 10');
});

test('A bot knows when to hit', function(assert) {
  const aceFive = shouldHit('ace', '5');
  const aceAce = shouldHit('ace', 'ace');
  const aceSeven = shouldHit('ace', '7');
  const aceJack = shouldHit('ace', 'jack');

  assert.equal(aceFive, true, 'A bot should hit when less than 17. Cards Ace & 5');
  assert.equal(aceAce, true, 'A bot should hit when it should split. Cards Ace & Ace');
  assert.equal(aceSeven, true, 'A bot should not hit when greater than 17. Cards Ace & Seven');
  assert.equal(aceJack, true, 'A bot should hit on natural 21. Cards Ace & Jack');
});
