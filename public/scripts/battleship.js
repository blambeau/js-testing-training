// Controller
var handleClick = function (event) {
  shootAt(this, showHit);
}

// View
var showHit = function (cell) {
  $(cell).addClass("hit");
}

var init = function () {  
  $("td").click(handleClick);
};

// Model
var shootAt = function (cell, onHit) {
  onHit(cell);
};

