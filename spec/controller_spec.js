var Controller = require("../public/scripts/battleship").Controller;

describe(Controller, function () {
  describe("handleClick", function () {
    it("tells the game to shoot at the targeted cell and call back in case of a hit or miss", function () {
      var game  = jasmine.createSpyObj("game", ["shootAt"]);
      var view  = jasmine.createSpyObj("view", ["showHit", "showMiss"]);
      var event = jasmine.createSpyObj("click event", ["target"]);
      var controller = new Controller(game, view);
      controller.handleClick(event);
      expect(game.shootAt).toHaveBeenCalledWith(event.target, view.showHit, view.showMiss);
    });
  });
});