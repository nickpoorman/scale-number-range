# scale-number-range

[![Build Status](https://travis-ci.org/nickpoorman/scale-number-range.svg?branch=master)](https://travis-ci.org/nickpoorman/scale-number-range)

scale a number from one range to another

## Install

```javascript
npm install scale-number-range
```

## Example

```javascript
var scale = require('scale-number-range');
// scale(number, oldMin, oldMax, newMin, newMax);
var num = scale(.25, 0, 1, 0, 100);
// num is now 25
```

If your `newMax` is higher than your `newMin`, it will correctly
scale the number in the opposite direction. 

```
> scale(3,0,100,0,1000);
30
> scale(3,0,100,1000,0);
970
```

# License

(The MIT License)

Copyright (c) 2014 Nick Poorman <mail@nickpoorman.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
