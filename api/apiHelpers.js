import api from './index';
import { reduceArray } from '../helpers/array';
import { REQUEST_NUMBER } from './types';

export const fetchByCity = (cityName, eventType) => {
  return api.get('', {
    params: {
      event_type: eventType,
      city: cityName,
      results_per_page: REQUEST_NUMBER,
    },
  });
};

export const fetchById = (id) => {
  return api.get('https://runsignup.com/rest/race', {
    params: {
      api_secret: 'Y6Y9ghjIfGJ5gSjXghBHve7TM5ndjckN',
      api_key: 'aH9ws2Ws3IsXLG6j89erUAZVc1XEA2SY',
      format: 'JSON',
      events: 'T',
      aflt_token: 'T',
      sort: 'date',
      start_date: 'today',
      future_events_only: 'T',
      race_id: id,
    },
  });
};

export const fetchByEventName = (eventName, eventType) => {
  return api.get('', {
    params: {
      event_type: eventType,
      name: eventName,
      results_per_page: REQUEST_NUMBER,
    },
  });
};
export const fetchByEvent = (eventType, all = false) => {
  if (all) {
    return api.get('', {
      params: {
        event_type: eventType,
        results_per_page: 500,
      },
    });
  }
  return api.get('', {
    params: {
      event_type: eventType,
      results_per_page: REQUEST_NUMBER,
    },
  });
};

export const fetchByEventAndDistance = async ({ eventTypes, minDistance }) => {
  const events = eventTypes.split(',');
  if (minDistance === 0 || !minDistance) {
    const races = await fetchForMultipleEvents(events);
    return races;
  }
  const races = await fetchForMultipleEventsWithDistance(events, minDistance);
  return races;
};

export const fetchForMultipleEvents = async (eventTypes, all = false) => {
  const dataList = await Promise.all(
    eventTypes.map((e) => fetchByEvent(e, all))
  );
  const races = [];
  dataList.forEach((data) => races.push(...data.data.races));

  races.sort((raceA, raceB) => {
    return new Date(raceA.next_date) - new Date(raceB.next_date);
  });

  return sortByDate(reduceArray([...new Set(races)]));
};

export const fetchByEventAndPage = (eventType, page) => {
  return api.get('', {
    params: {
      event_type: eventType,
      page: page,
      results_per_page: REQUEST_NUMBER,
    },
  });
};
export const fetchByDistance = (eventType, distance) => {
  return api.get('', {
    params: {
      event_type: eventType,
      min_distance: +distance,
      results_per_page: REQUEST_NUMBER,
    },
  });
};

export const fetchForMultipleEventsWithPage = async (
  eventTypes,
  pageNumber
) => {
  const dataList = await Promise.all(
    eventTypes.map((e) => fetchByEventAndPage(e, pageNumber))
  );
  const races = [];
  dataList.forEach((data) => races.push(...data.data.races));
  return sortByDate(reduceArray([...new Set(races)]));
};
export const fetchForMultipleEventsWithDistance = async (
  eventTypes,
  distance
) => {
  const dataList = await Promise.all(
    eventTypes.map((e) => fetchByDistance(e, distance))
  );
  const races = [];
  dataList.forEach((data) => races.push(...data.data.races));
  return sortByDate(reduceArray([...new Set(races)]));
};

export const sortByDate = (arr) => {
  arr.sort((raceA, raceB) => {
    return new Date(raceA.race.next_date) - new Date(raceB.race.next_date);
  });

  return arr;
};

export const fetchRacePaths = async (eventTypes) => {
  const events = await fetchForMultipleEvents(eventTypes, true);
  const paths = events.map((e) => e.race_id);
  return paths;
};

// export const fetchForMultipleRacesTest = async (eventTypes, ...rest) => {
//   const dataList = await Promise.all(
//     eventTypes.map((e) => fetchByEvent(e, ...rest))
//   );

//   const races = [];
//   dataList.forEach((data) => races.push(...data.data.races));

//   races.sort((raceA, raceB) => {
//     return new Date(raceA.next_date) - new Date(raceB.next_date);
//   });

//   return sortByDate(reduceArray([...new Set(races)]));
// }

// export const fetchByEventTest = (eventType, ...args) => {
//   return api.get('', {
//     params: {
//       event_type: eventType,
//       ...args,
//     },
//   });
// };
