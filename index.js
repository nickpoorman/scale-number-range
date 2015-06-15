/**
 * simple module to scale a number from one range to another
 */
var debug = require('debug')('scale-number-range');

module.exports = function scaleNumberRange(number, oldMin, oldMax, newMin, newMax) {
  if (process.env.SCALE_THROW_OOB_ERRORS) {
    if (number < oldMin) {
      debug('ERROR OOB - scale(%d, %d, %d, %d, %d)', number, oldMin, oldMax, newMin, newMax);
      throw new Error('number is less than oldMin');
    }
    if (number > oldMax) {
      debug('ERROR OOB - scale(%d, %d, %d, %d, %d)', number, oldMin, oldMax, newMin, newMax);
      throw new Error('number is greater than oldMax');
    }
  }
  return (((newMax - newMin) * (number - oldMin)) / (oldMax - oldMin)) + newMin;
}
