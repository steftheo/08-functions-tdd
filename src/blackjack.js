/**
 * Should return the basic numeric value of a card
 * @param  {String} cardName
 * @return {Number}
 */
function cardValue(cardName) {
  if (cardName === 'ace') {
    return 11;
  }

  if (cardName === 'five') {
    return 5;
  }

  if (cardName === 'nine') {
    return 9;
  }
  if (cardName === 'ten') {
    return 10;
  }
  if (cardName === 'jack') {
    return 10;
  }
  if (cardName === 'queen') {
    return 10;
  }
  if (cardName === 'king') {
    return 10;
  }

  else {return parseInt(cardName, 10)};
}

/**
 * Returns the numeric sum of two numbers
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}
 */
function sum(a, b) {


}

/**
 * Returns if a dealer should split doubles
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldSplit(cardOne, cardTwo) {

}

/**
 * Returns if a dealer should hit given two cards
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {Boolean}
 */
function shouldHit(cardOne, cardTwo) {

}

/**
 * Returns what the dealer should do
 * @param  {String} cardOne
 * @param  {String} cardTwo
 * @return {String}
 */
function selectAction(cardOne, cardTwo) {

}
