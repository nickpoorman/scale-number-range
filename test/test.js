var should = require('should');
var scale = require('../');

describe('test scale-number-range', function() {
  it('should scale 0.25 to 25', function() {
    var number = 0.25;
    var min = 0;
    var max = 1;
    var newMin = 0;
    var newMax = 100;
    scale(number, min, max, newMin, newMax).should.equal(25);
  });

  it('should scale 0 to 0', function() {
    var number = 0;
    var min = 0;
    var max = 1;
    var newMin = 0;
    var newMax = 100;
    scale(number, min, max, newMin, newMax).should.equal(0);
  });

  it('should scale 1 to 100', function() {
    var number = 1;
    var min = 0;
    var max = 1;
    var newMin = 0;
    var newMax = 100;
    scale(number, min, max, newMin, newMax).should.equal(100);
  });
});
