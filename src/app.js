'use strict';

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
  const newGame = [];

  for (var x = 0; x < game.length; x++) {
    const row = game[x];
    const newRow = [];

    for (var y = 0; y < row.length; y++) {
      const cell = row[y];
      const neighbors = getNeighbors(game, x, y);

      if (cell) {
        newRow.push(aliveEh(neighbors));
      } else {
        newRow.push(reviveEh(neighbors));
      }
    }

    newGame.push(newRow);
  }

  return newGame;
}

function renderGame(el, game) {
  clearElement(el);

  game.forEach(function(row, x) {
    const rowEl = document.createElement('div');
    rowEl.classList.add('game__row');

    row.forEach(function(cell, y) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('game__cell');
      cellEl.dataset.x = x;
      cellEl.dataset.y = y;

      if (cell) {
        cellEl.classList.add('game__cell--active');
      }

      rowEl.appendChild(cellEl);
    });

    el.appendChild(rowEl);
  });
}

function startGame(gridEl, playEl) {
  let game = createGame(20, 20);

  renderGame(gridEl, game);

  playEl.addEventListener('click', function() {
    game = runGame(game);

    renderGame(gridEl, game);
  });

  gridEl.addEventListener('click', function(ev) {
    game = flipTile(game, ev.target.dataset.x, ev.target.dataset.y);

    renderGame(gridEl, game);
  });
}
