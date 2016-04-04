'use strict';

function aliveNeighbors(neighbors) {
  return neighbors.reduce((snowball, current) => {
    if (current) {
      return snowball + 1;
    }
    return snowball;

  }, 0);
}


/**
 * Canadian check if a cell should remain alive
 * @param  {Array} neighbors
 * @return {Boolean}
 */
function aliveEh(neighbors) {
  if (aliveNeighbors(neighbors) === 2 || aliveNeighbors(neighbors) === 3) {
    return true;
  }

  return false;
}

/**
 * Canadian check if a cell should be revived
 * @param  {Array} neighbors
 * @return {Boolean}
 */
function reviveEh(neighbors) {
  if (aliveNeighbors(neighbors) === 3) {
    return true;
  }

  return false;
}
