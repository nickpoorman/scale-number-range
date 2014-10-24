# scale-number-range

[![Build Status](https://travis-ci.org/nickpoorman/scale-number-range.svg?branch=master)](https://travis-ci.org/nickpoorman/scale-number-range)

scale a number from one range to another

```
var scale = require('scale-number-range');
// scale(number, oldMin, oldMax, newMin, newMax);
var num = scale(.25, 0, 1, 0, 100);
// num is now 25
```

