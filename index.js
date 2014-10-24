/**
 * simple module to scale a number from one range to another
 */

module.exports = function scaleNumberRange(number, oldMin, oldMax, newMin, newMax) {
  return (((newMax - newMin) * (number - oldMin)) / (oldMax - oldMin)) + newMin;
}
