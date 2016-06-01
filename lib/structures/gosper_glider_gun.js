var Structure = require('./structure'),
    Util = require('../utils');

var GosperGliderGun = function(grid, startPos, rotationCount) {
  Structure.call(this, GosperGliderGun.OPTIONS, rotationCount);

  this.render(grid, startPos);
};

Util.inherits(GosperGliderGun, Structure);

GosperGliderGun.OPTIONS = {
  height: 10,
  width: 37,
  liveCellDeltas: [
    [25, 1],
    [23, 2],
    [25, 2],
    [13, 3],
    [14, 3],
    [21, 3],
    [22, 3],
    [35, 3],
    [36, 3],
    [12, 4],
    [16, 4],
    [21, 4],
    [22, 4],
    [35, 4],
    [36, 4],
    [1, 5],
    [2, 5],
    [11, 5],
    [17, 5],
    [21, 5],
    [22, 5],
    [1, 6],
    [2, 6],
    [11, 6],
    [15, 6],
    [17, 6],
    [18, 6],
    [23, 6],
    [25, 6],
    [11, 7],
    [17, 7],
    [25, 7],
    [12, 8],
    [16, 8],
    [13, 9],
    [14, 9]
  ]
};

module.exports = GosperGliderGun;