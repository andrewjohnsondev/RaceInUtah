import {
  RUNNING_RACE,
  TRAIL_RACE,
  VIRTUAL_RACE,
  ALL_RACES,
  ROAD_BIKE_RACE,
  MOUNTAIN_BIKE_RACE,
  GRAVEL_BIKE_RACE,
  BIKE_TOURS,
  TRIATHLON,
  DUATHLON,
  WHEELCHAIR,
} from './types';

export const runningRaceDistanceOptions = [
  { name: 'Any', value: 0 },
  { name: '0.5 Mile', value: 0.804672 },
  { name: '1 Mile', value: 1.60934 },
  { name: '5K', value: 5 },
  { name: '10K', value: 10 },
  { name: '10 Miles', value: 16.0934 },
  { name: 'Half Marathon', value: 21 },
  { name: 'Marathon', value: 42.195 },
  { name: '50K', value: 50 },
  { name: '50 Miles', value: 80.4672 },
  { name: '100K', value: 100 },
  { name: '100 Miles', value: 160.934 },
  { name: '250 Miles', value: 402.336 },
];

export const runningEventOptions = [
  { name: 'All', value: ALL_RACES },
  { name: 'Trail', value: TRAIL_RACE },
  { name: 'Virtual', value: VIRTUAL_RACE },
];
export const bikingEventOptions = [
  { name: 'Road Bike Race', value: ROAD_BIKE_RACE },
  { name: 'Mountain Bike Race', value: MOUNTAIN_BIKE_RACE },
  { name: 'Gravel Bike Race', value: GRAVEL_BIKE_RACE },
  { name: 'Bike Tours', value: BIKE_TOURS },
];

export const allEvents = [
  { type: 'run', param: RUNNING_RACE },
  { type: 'trailRun', param: TRAIL_RACE },
  { type: 'virtualRun', param: VIRTUAL_RACE },
  { type: 'roadBike', param: ROAD_BIKE_RACE },
  { type: 'bikeTours', param: BIKE_TOURS },
  { type: 'gravelBike', param: GRAVEL_BIKE_RACE },
  { type: 'mountainBike', param: MOUNTAIN_BIKE_RACE },
  { type: 'triathlon', param: TRIATHLON },
  { type: 'duathlon', param: DUATHLON },
  { type: 'wheelchair', param: WHEELCHAIR },
];
