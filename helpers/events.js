import { removeCalendarDuplicates } from '../helpers/array';
import {
  RUNNING_RACE,
  TRAIL_RACE,
  VIRTUAL_RACE,
  ROAD_BIKE_RACE,
  GRAVEL_BIKE_RACE,
  BIKE_TOURS,
  MOUNTAIN_BIKE_RACE,
  TRIATHLON,
  DUATHLON,
  WHEELCHAIR,
} from '../api/types';
import moment from 'moment';
export const renderDistances = (race) => {
  const distances = new Set();
  race.events.map((event) => distances.add(event.distance));
  if (Array.from(distances)[0] === null) {
    return 'Not Listed';
  }
  return Array.from(distances).join(', ');
};

export const returnEventsTypes = ({ events }) => {
  const eventTypes = events.map(({ event_type }) => {
    return checkEventType(event_type);
  });
  const filteredEventTypes = eventTypes.filter((e) => e);
  return [
    ...new Set(
      filteredEventTypes.length > 1
        ? filteredEventTypes.filter((e) => e !== 'Not listed...')
        : filteredEventTypes
    ),
  ];
};

export const checkEventType = (e) => {
  switch (e) {
    case TRAIL_RACE:
      return 'Trail Run';
    case RUNNING_RACE:
      return 'Run';
    case VIRTUAL_RACE:
      return 'Virtual Run';
    case ROAD_BIKE_RACE:
      return 'Road Bike';
    case MOUNTAIN_BIKE_RACE:
      return 'Mountain Bike';
    case BIKE_TOURS:
      return 'Tour Bike';
    case GRAVEL_BIKE_RACE:
      return 'Gravel Bike';
    case TRIATHLON:
      return 'Triathlon';
    case DUATHLON:
      return 'Duathlon';
    case WHEELCHAIR:
      return 'Wheelchair';
    default:
      return 'Not listed...';
  }
};

const makeCalendarObjects = (data, bg) => {
  const calendarObjects = data.map(({ race }) => {
    const dt = new Date(race.next_date);
    return {
      title: race.name,
      start: moment(dt).format('yyyy-MM-DD'),
      end: moment(dt).format('yyyy-MM-DD'),
      allDay: true,
      id: race.race_id,
      bg,
    };
  });

  return calendarObjects;
};

const checkCalendarEventType = ({ type, data }) => {
  switch (type) {
    case 'run':
      return makeCalendarObjects(data, '#40C3F7');
    case 'trailRun':
      return makeCalendarObjects(data, '#E74B4F');
    case 'virtualRun':
      return makeCalendarObjects(data, '#EB9650');
    case 'roadBike':
      return makeCalendarObjects(data, '#F6BE2E');
    case 'mountainBike':
      return makeCalendarObjects(data, '#A2E534');
    case 'bikeTours':
      return makeCalendarObjects(data, '#2AD3BF');
    case 'gravelBike':
      return makeCalendarObjects(data, '#5FA5F9');
    case 'triathlon':
      return makeCalendarObjects(data, '#E27BF9');
    case 'duathlon':
      return makeCalendarObjects(data, '#F67287');
    case 'wheelchair':
      return makeCalendarObjects(data, '#808CF7');
    default:
      return makeCalendarObjects(data, '#EF9F21');
  }
};

export const makeCalendarEvents = async (allEvents) => {
  const events = await allEvents;

  const getCalendarEvents = events.map((e) => {
    return checkCalendarEventType(e);
  });

  let calendarEvents = [];
  getCalendarEvents.forEach(
    (e) => (calendarEvents = [...calendarEvents, ...e])
  );

  return removeCalendarDuplicates(calendarEvents);
};
