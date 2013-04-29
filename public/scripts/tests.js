// End-to-end tests

describe("shooting", function () {
  var game;

  beforeEach(function () {
    game = startBattleshipGame();
  });

  describe("when I miss", function () {
    var $td;

    beforeEach(function () {
      $td = $($("td").get(0));
    });

    it("marks the cell as a miss", function() {
      expect($td.hasClass("miss")).toBeFalsy();
      $td.click();
      expect($td.hasClass("miss")).toBeTruthy();
    });
  });

  describe("when I hit a ship", function () {
    var $td;

    beforeEach(function () {
      var td = $("td").get(1);
      $td = $(td);
      game.occupiedCells.push(td);
    });

    it("marks the cell as a hit", function() {
      expect($td.hasClass("hit")).toBeFalsy();
      $td.click();
      expect($td.hasClass("hit")).toBeTruthy();
    });
  });
});
