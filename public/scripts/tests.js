// End-to-end tests

describe("shooting", function () {
  describe("when I miss", function () {
    var $td = $($("td").get(0));

    it("marks the cell as a miss", function() {
      expect($td.hasClass("miss")).toBeFalsy();
      $td.click();
      expect($td.hasClass("miss")).toBeTruthy();
    });
  });

  describe("when I hit a ship", function () {
    var td = $("td").get(1);
    var $td = $(td);
    occupiedCells.push(td);

    it("marks the cell as a hit", function() {
      expect($td.hasClass("hit")).toBeFalsy();
      $td.click();
      expect($td.hasClass("hit")).toBeTruthy();
    });
  });
});

// Unit tests

describe("shootAt", function () {

  describe("when the targetted cell is occupied", function () {
    it ("calls the hit callback with the cell", function () {
      var occupiedCell = "occupied cell";
      occupiedCells = [occupiedCell];
      var onHit = jasmine.createSpy("onHit callback");
      var onMiss = jasmine.createSpy("onMiss callback"); 
      shootAt(occupiedCell, onHit, onMiss);
      expect(onHit).toHaveBeenCalledWith(occupiedCell);
    });
  });

  describe("when the targetted cell is free", function () {
    it("calls the miss callback with the cell", function () {
      var freeCell = "free cell";
      occupiedCells = [];
      var onHit = jasmine.createSpy("onHit callback");
      var onMiss = jasmine.createSpy("onMiss callback"); 
      shootAt(freeCell, onHit, onMiss);
      expect(onMiss).toHaveBeenCalledWith(freeCell);
    });
  });
  
});
