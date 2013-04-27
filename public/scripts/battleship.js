// Controller
var handleClick = function (event) {
  shootAt(this, showHit, showMiss);
}

// View
var showHit = function (cell) {
  $(cell).addClass("hit");
};

var showMiss = function (cell) {
  $(cell).addClass("miss");
};

var init = function () {  
  $("td").click(handleClick);
};

// Model
var occupiedCells = [];

var shootAt = function (cell, onHit, onMiss) {
  if (isCellOccupied(cell)) 
    onHit(cell);
  else
    onMiss(cell);
};

var isCellOccupied = function (cell) {
  return (occupiedCells.indexOf(cell) >= 0);
}

if (typeof module !== "undefined") {
  module.exports = {
    shootAt: shootAt,
    occupiedCells: occupiedCells
  };
}