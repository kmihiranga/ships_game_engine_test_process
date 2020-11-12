var expect = require('chai').expect;

// test suit
describe('checkForShip', function () {
  var checkForShip = require('../game_logic/ship_methods').checkForShip;
  it('should correctly report no ship at a given players coordinate', function () {
    var player = {
      ships: [
        {
          location: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should correctly report a ship located at the given coordinates', function () {
    var player = {
      ships: [
        {
          location: [[0, 0]],
        },
      ],
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
  });

  it('should handle ships located at more than one coordinate', function () {
    var player = {
      ships: [
        {
          location: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it('should handle checking multiple ships', function () {
    var player = {
      ships: [
        {
          location: [
            [0, 0],
            [0, 1],
          ],
          location: [
            [1, 0],
            [1, 1],
          ],
        },
      ],
    };
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [1, 0])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
