import { MOUNTAIN_BIKE_RACE } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function mountain({ races, events }) {
  return (
    <RaceEventsPage
      includeFilter="false"
      races={races}
      events={events}
      eventOptions={bikingEventOptions}
      title="Mountain Bike Races"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([MOUNTAIN_BIKE_RACE], false);

  return {
    props: {
      races: races,
      events: [MOUNTAIN_BIKE_RACE],
    },
    revalidate: 60,
  };
};
export default mountain;
