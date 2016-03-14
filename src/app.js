// Don't go beyond this point
function createGame(x, y) {
  const grid = [];

  for (var i = 0; i < x; i++) {
    grid.push([]);

    for (var z = 0; z < y; z++) {
      grid[i].push(false);
    }
  }

  return grid;
}

function replaceInArray(arr, index, value) {
  const cp = [].concat(arr);
  cp[index] = value;

  return cp;
}

function flipTile(game, x, y) {
  return replaceInArray(game, x, replaceInArray(game[x], y, !game[x][y]));
}

function clearElement(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function renderGame(el, game) {
  clearElement(game);

  game.forEach(function(row) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('game__row');

    row.forEach(function(cell) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('game__cell');

      if (cell) {
        cellEl.classList.add('game__cell--active');
      }

      rowEl.appendChild(cellEl);
    });

    el.appendChild(rowEl);
  });
}

function startGame(gridEl, playEl) {

}
