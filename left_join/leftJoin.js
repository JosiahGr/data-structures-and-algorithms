'use strict';

// big o - Time 0(n) Space O(n)
const leftJoin = (mapLeft, mapRight) => {
  if (!mapLeft) return null;
  if (!mapRight) return mapLeft;

  const map = {};
  Object.keys(mapLeft).forEach((key) => {
    map[key] = [mapLeft[key]];
    if (mapRight[key]) {
      map[key].push(mapRight[key]);
    } else {
      map[key].push(null);
    }
  });
  return map;
};

export default leftJoin;
