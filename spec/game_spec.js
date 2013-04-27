var Game = require("../public/scripts/battleship").Game;

describe(Game, function () {
  var game = new Game();

  describe("shootAt", function () {

    describe("when the targetted cell is occupied", function () {
      it ("calls the hit callback with the cell", function () {
        var occupiedCell = "occupied cell";
        game.occupiedCells.push(occupiedCell);
        var onHit = jasmine.createSpy("onHit callback");
        var onMiss = jasmine.createSpy("onMiss callback");
        game.shootAt(occupiedCell, onHit, onMiss);
        expect(onHit).toHaveBeenCalledWith(occupiedCell);
      });
    });

    describe("when the targetted cell is free", function () {
      it("calls the miss callback with the cell", function () {
        var freeCell = "free cell";
        game.occupiedCells.length = 0;
        var onHit = jasmine.createSpy("onHit callback");
        var onMiss = jasmine.createSpy("onMiss callback");
        game.shootAt(freeCell, onHit, onMiss);
        expect(onMiss).toHaveBeenCalledWith(freeCell);
      });
    });

  });
});