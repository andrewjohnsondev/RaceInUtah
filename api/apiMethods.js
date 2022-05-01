import api from './index';
import { removeEventDuplicates, sortEventsByDate } from '../helpers/array';
import { REQUEST_NUMBER } from './types';

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

export const fetchByEvent = (eventType, all = false, options) => {
  if (all) {
    return api.get('', {
      params: {
        event_type: eventType,
        results_per_page: 1000,
        ...options,
      },
    });
  }
  return api.get('', {
    params: {
      event_type: eventType,
      results_per_page: REQUEST_NUMBER,
      ...options,
    },
  });
};

export const fetchForMultipleEvents = async (
  eventTypes,
  all = false,
  options
) => {
  const dataList = await Promise.all(
    eventTypes.map((eventType) => fetchByEvent(eventType, all, options))
  );
  let races = [];
  dataList.forEach(({ data }) => (races = [...races, ...data.races]));

  return sortEventsByDate(removeEventDuplicates(races));
};

export const fetchRacePaths = async (eventTypes) => {
  const events = await fetchForMultipleEvents(eventTypes, true);
  const paths = events.map((e) => e.race_id);
  return paths;
};

export const fetchByEventAndDistance = async ({ eventTypes, minDistance }) => {
  const events = eventTypes.split(',');
  if (minDistance === 0 || !minDistance) {
    const races = await fetchForMultipleEvents(events, false);
    return races;
  }
  const races = await fetchForMultipleEvents(events, false, {
    min_distance: minDistance,
  });
  return races;
};
