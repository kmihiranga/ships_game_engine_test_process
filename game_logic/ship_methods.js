function checkForShip(player, coordinates) {
  var shipPresent, ship;

  for (var i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    shipPresent = ship.location.filter(function (actualCoordinate) {
      return (
        actualCoordinate[0] === coordinates[0] &&
        actualCoordinate[1] === coordinates[1]
      );
    })[0];

    if (!shipPresent) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports.checkForShip = checkForShip;
