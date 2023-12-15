const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

let distanceMatrix = [[]];
assert(tspHK(distanceMatrix) == 0);

distanceMatrix = [[0]];
assert(tspHK(distanceMatrix) == 0);

distanceMatrix = [[0,0,0],
      [0,0,0],
      [0,0,0]];
assert(tspHK(distanceMatrix) == 0);

distanceMatrix = [[0,1,2],
      [1,0,2],
      [2,2,0]];
assert(tspHK(distanceMatrix) == 3);

// https://people.sc.fsu.edu/~jburkardt/datasets/tsp/tsp.html
