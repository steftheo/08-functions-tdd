/**
 * Canadian check if a cell should remain alive
 * @param  {Array} neighbors
 * @return {Boolean}
 */
function aliveEh(neighbors) {

}

/**
 * Canadian check if a cell should be revived
 * @param  {Array} neighbors
 * @return {Boolean}
 */
function reviveEh(neighbors) {

}

// Don't go beyond this point
function createGame(x, y) {
  let grid = [];

  for (var i = 0; i < x; i++) {
    grid.push([]);

    for (var z = 0; z < y; z++) {
      grid[i].push(false);
    }
  }

  return grid;
}
