import {
  BIKE_TOURS,
  MOUNTAIN_BIKE_RACE,
  ROAD_BIKE_RACE,
  GRAVEL_BIKE_RACE,
} from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function all({ races, events }) {
  return (
    <>
      <HeadComponent
        title="All Bike Races | RaceInUtah"
        description="Upcoming Bike Races in Utah"
        keywords="Utah, Upcoming Gravel Races in Utah, Biking, Bike, Gravel, Gravel Bikes, Gravel Biking, Gravel Races, Gravel Bike Races Upcoming Mountain Races in Utah, Mountain, Mountain Bikes, Mountain Biking, Mountain Races, Mountain Bike Races, Upcoming Road Bike Races in Utah, Road, Road Bikes, Road Biking, Road Races, Upcoming Utah Bike Tours, Tours, Bike Tours, Bike Races, Touring, Bike Touring"
      />
      <RaceEventsPage
        races={races}
        events={events}
        type="run"
        eventOptions={bikingEventOptions}
        title="All Bike Races And Tours"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents(
    [BIKE_TOURS, MOUNTAIN_BIKE_RACE, ROAD_BIKE_RACE, GRAVEL_BIKE_RACE],
    false
  );

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
