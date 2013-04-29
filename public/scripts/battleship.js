// Controller
function Controller(game, view) {
  var self = this;

  self.game = game;
  self.view = view;

  view.onCellShot(function (event) {
    self.handleClick(event);
  });
}

Controller.prototype.handleClick = function (event) {
  this.game.shootAt(event.target, this.view.showHit, this.view.showMiss);
};

// View
function View(template) {
  $("#game-container").html(template);
}

View.prototype.showHit = function (cell) {
  $(cell).addClass("hit");
};

View.prototype.showMiss = function (cell) {
  $(cell).addClass("miss");
};

View.prototype.onCellShot = function (callback) {
  $("td").click(callback);
};

var startBattleshipGame = function () {
  var gridTemplate = $("#template-battleship-grid").text();
  var game = new Game();
  var view = new View(gridTemplate);
  var controller = new Controller(game, view);
  return game;
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
};

if (typeof module !== "undefined") {
  module.exports = { Game: Game, Controller: Controller };
}