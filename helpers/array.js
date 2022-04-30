export const reduceDeepArray = (arr) => {
  const reducedArr = arr.reduce((prev, nextVal) => {
    prev[nextVal.race.race_id] = nextVal;
    return prev;
  }, {});

  return Object.values(reducedArr);
};
export const reduceShallowArray = (arr) => {
  const reducedArr = arr.reduce((prev, nextVal) => {
    prev[nextVal.id] = nextVal;
    return prev;
  }, {});

  return Object.values(reducedArr);
};
