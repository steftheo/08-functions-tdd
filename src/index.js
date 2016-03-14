QUnit.module('Blackjack Bot');

// test('A bot knows a card value')

test('A bot knows when to hit', function(assert) {
  const aceFive = shouldHit('ace', '5');
  const aceAce = shouldHit('ace', 'ace');
  const aceSeven = shouldHit('ace', '7');
  const aceJack = shouldHit('ace', 'jack');

  assert.equal(aceFive, true, 'A bot should hit when less than 17. Cards Ace & 5');
  assert.equal(aceAce, true, 'A bot should hit when it should split. Cards Ace & Ace');
  assert.equal(aceSeven, true, 'A bot should not hit when greater than 17. Cards Ace & Seven');
  assert.equal(aceJack, true, 'A bot should hit on natural 21. Cards Ace & Jack');
})
