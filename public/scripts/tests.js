describe("clicking a cell", function () {
  var $td = $($("td").get(1));

  it("is marked as hit", function() {
    expect($td.hasClass("hit")).toBeFalsy();
    $td.click();
    expect($td.hasClass("hit")).toBeTruthy();
  });
});
