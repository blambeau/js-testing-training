var game;

// Controller
var handleClick = function (event) {
  game.shootAt(this, showHit, showMiss);
}

// View
var showHit = function (cell) {
  $(cell).addClass("hit");
};

var showMiss = function (cell) {
  $(cell).addClass("miss");
};

var init = function () {
  game = new Game();
  $("td").click(handleClick);
};

// Model
function Game() {
  this.occupiedCells = [];
}

Game.prototype.shootAt = function (cell, onHit, onMiss) {
  if (this.isCellOccupied(cell))
    onHit(cell);
  else
    onMiss(cell);
};

Game.prototype.isCellOccupied = function (cell) {
  return (this.occupiedCells.indexOf(cell) >= 0);
}

if (typeof module !== "undefined") {
  module.exports = { Game: Game };
}