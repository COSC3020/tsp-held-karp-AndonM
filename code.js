function tspHK(distanceMatrix) {
    if distanceMatrix = [[]] {
        minDistance == 0;
    }
    else {
        const n = distanceMatrix.length;
        const memo = new Array(2 ** n).fill().map(() => new Array(n).fill(-1));
        function heldKarp(visited, pos) {
          if (visited === (2 ** n) - 1) {
            return distanceMatrix[pos][0];
          }
          if (memo[visited][pos] !== -1) {
            return memo[visited][pos];
          }
          let minDistance = Infinity;
          for (let next = 0; next < n; next++) {
            const nextCityBit = 2 ** next;
            if ((visited & nextCityBit) === 0) {
              const newVisited = visited | nextCityBit;
              const newDistance =
                distanceMatrix[pos][next] + heldKarp(newVisited, next);
                minDistance = Math.min(minDistance, newDistance);
                }
              }
              memo[visited][pos] = minDistance;
              return minDistance;
        }
        return heldKarp(1, 0);
    }
}
