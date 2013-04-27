var battleship    = require("../public/scripts/battleship");
var shootAt       = battleship.shootAt;
var occupiedCells = battleship.occupiedCells;

describe("shootAt", function () {

  describe("when the targetted cell is occupied", function () {
    it ("calls the hit callback with the cell", function () {
      var occupiedCell = "occupied cell";
      occupiedCells.push(occupiedCell);
      var onHit = jasmine.createSpy("onHit callback");
      var onMiss = jasmine.createSpy("onMiss callback");
      shootAt(occupiedCell, onHit, onMiss);
      expect(onHit).toHaveBeenCalledWith(occupiedCell);
    });
  });

  describe("when the targetted cell is free", function () {
    it("calls the miss callback with the cell", function () {
      var freeCell = "free cell";
      occupiedCells.length = 0;
      var onHit = jasmine.createSpy("onHit callback");
      var onMiss = jasmine.createSpy("onMiss callback");
      shootAt(freeCell, onHit, onMiss);
      expect(onMiss).toHaveBeenCalledWith(freeCell);
    });
  });

});