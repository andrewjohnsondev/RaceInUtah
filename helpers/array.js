export const removeEventDuplicates = (arr) => {
  const reducedArr = arr.reduce((prev, nextVal) => {
    prev[nextVal.race.race_id] = nextVal;
    return prev;
  }, {});

  return Object.values(reducedArr);
};
export const removeCalendarDuplicates = (arr) => {
  const reducedArr = arr.reduce((prev, nextVal) => {
    prev[nextVal.id] = nextVal;
    return prev;
  }, {});

  return Object.values(reducedArr);
};

export const sortEventsByDate = (arr) => {
  arr.sort((raceA, raceB) => {
    return new Date(raceA.race.next_date) - new Date(raceB.race.next_date);
  });

  return arr;
};
