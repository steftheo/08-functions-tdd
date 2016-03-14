
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

function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function replaceInArray(arr, index, value) {
  const cp = [].concat(arr);
  cp[index] = value;

  return cp;
}

function flipTile(game, x, y) {
  return replaceInArray(game, x, replaceInArray(game[x], y, !game[x][y]));
}

function renderGame(el, game) {

}
