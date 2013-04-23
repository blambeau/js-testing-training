// End-to-end tests

describe("clicking a cell", function () {
  var $td = $($("td").get(1));

  it("is marked as hit", function() {
    expect($td.hasClass("hit")).toBeFalsy();
    $td.click();
    expect($td.hasClass("hit")).toBeTruthy();
  });
});

// Unit tests

describe("shootAt", function () {
  it ("calls the hit callback with the cell", function () {
    var cell = "cell";
    var onHit = jasmine.createSpy("onHit callback");
    shootAt(cell, onHit);
    expect(onHit).toHaveBeenCalledWith(cell);
  });  
});
