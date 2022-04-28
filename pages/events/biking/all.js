import {
  BIKE_TOURS,
  MOUNTAIN_BIKE_RACE,
  ROAD_BIKE_RACE,
  GRAVEL_BIKE_RACE,
} from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiHelpers';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function all({ races, events }) {
  return (
    <RaceEventsPage
      races={races}
      events={events}
      type="run"
      eventOptions={bikingEventOptions}
      title="All Bike Races And Tours"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([
    BIKE_TOURS,
    MOUNTAIN_BIKE_RACE,
    ROAD_BIKE_RACE,
    GRAVEL_BIKE_RACE,
  ]);

  return {
    props: {
      races: races,
      events: [
        BIKE_TOURS,
        MOUNTAIN_BIKE_RACE,
        ROAD_BIKE_RACE,
        GRAVEL_BIKE_RACE,
      ],
    },
    revalidate: 60,
  };
};
export default all;
