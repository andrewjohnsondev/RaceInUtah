import Image from 'next/image';
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
