import { GRAVEL_BIKE_RACE } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function gravel({ races, events }) {
  return (
    <RaceEventsPage
      includeFilter="false"
      races={races}
      events={events}
      eventOptions={bikingEventOptions}
      title="Gravel Bike Races"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([GRAVEL_BIKE_RACE]);

  return {
    props: {
      races: races,
      events: [GRAVEL_BIKE_RACE],
    },
    revalidate: 60,
  };
};
export default gravel;
