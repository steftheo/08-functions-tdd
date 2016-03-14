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

function getNeighbors(game, x, y) {
  const neighbors = [];

  for (var i = x - 1; i <= x + 1; i++) {
    for (var j = y - 1; j <= y + 1; j++) {
      if (x !== i || j !== y) {
        if (game[i]) {
          neighbors.push(game[i][j]);
        } else {
          neighbors.push(undefined);
        }
      }
    }
  }

  return neighbors;
}

function runGame(game) {

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
  let game = createGame(10, 10);

  renderGame(gridEl, game);

  playEl.addEventListener('click', function() {

  });
}
