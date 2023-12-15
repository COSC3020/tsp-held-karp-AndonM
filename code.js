function tspHK(distanceMatrix) {
    if (distanceMatrix.length <= 1) {
        return 0;
    }
    const memo = {};
    function heldKarp(visited, pos) {
        let key = JSON.stringify([visited, pos]);
        if (memo[key] !== undefined) {
            return memo[key];
        }
        if (visited.length === 2) {
            memo[key] = distanceMatrix[visited[0]][visited[1]];
            return memo[key];
        } 
        else {
            let minimum = Infinity;
            for (let i = 0; i < visited.length; i++) {
                let nextCity = visited[i];
                if (nextCity !== pos) {
                    let newVisited = visited.filter(city => city !== pos);
                    let newMin = heldKarp(newVisited, nextCity) + distanceMatrix[pos][nextCity];

                    minimum = Math.min(minimum, newMin);
                }
            }
            memo[key] = minimum;
            return minimum;
        }
    }
    let cities = Array.from({ length: distanceMatrix.length }, (_, i) => i);
    let minTourLength = Infinity;
    for (let start = 1; start < cities.length; start++) {
        let tourLength = distanceMatrix[0][start] + heldKarp([...cities], start);
        minTourLength = Math.min(minTourLength, tourLength);
    }
    return minTourLength === Infinity ? 0 : minTourLength;
}
