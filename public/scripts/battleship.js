var controller, view, game;

// Controller
function Controller(game, view) {
  this.game = game;
  this.view = view;
}

Controller.prototype.handleClick = function (event) {
  this.game.shootAt(event.target, this.view.showHit, this.view.showMiss);
}

// View
function View() {};

View.prototype.showHit = function (cell) {
  $(cell).addClass("hit");
};

View.prototype.showMiss = function (cell) {
  $(cell).addClass("miss");
};

var init = function () {
  game = new Game();
  view = new View();
  controller = new Controller(game, view);

  $("td").click(function (event) {
    controller.handleClick(event);
  });
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
  module.exports = { Game: Game, Controller: Controller };
}