export const reduceArray = (arr) => {
  const reducedArr = arr.reduce((prev, nextVal) => {
    prev[nextVal.race.race_id] = nextVal;
    return prev;
  }, {});

  return Object.values(reducedArr);
};
