var Game = require("../public/scripts/battleship").Game;

describe(Game, function () {
  var game, onHit, onMiss;

  beforeEach(function () {
    game = new Game();
    onHit = jasmine.createSpy("onHit callback");
    onMiss = jasmine.createSpy("onMiss callback");
  });

  describe("shootAt", function () {

    describe("when the targeted cell is occupied", function () {
      it ("calls the hit callback with the cell", function () {
        var occupiedCell = "occupied cell";
        game.occupiedCells.push(occupiedCell);
        game.shootAt(occupiedCell, onHit, onMiss);
        expect(onHit).toHaveBeenCalledWith(occupiedCell);
      });
    });

    describe("when the targeted cell is free", function () {
      it("calls the miss callback with the cell", function () {
        var freeCell = "free cell";
        game.shootAt(freeCell, onHit, onMiss);
        expect(onMiss).toHaveBeenCalledWith(freeCell);
      });
    });

  });
});