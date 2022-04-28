import { ROAD_BIKE_RACE } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiHelpers';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function road({ races, events }) {
  return (
    <RaceEventsPage
      includeFilter="false"
      races={races}
      events={events}
      eventOptions={bikingEventOptions}
      title="Road Bike Races"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([ROAD_BIKE_RACE]);

  return {
    props: {
      races: races,
      events: [ROAD_BIKE_RACE],
    },
    revalidate: 60,
  };
};
export default road;
