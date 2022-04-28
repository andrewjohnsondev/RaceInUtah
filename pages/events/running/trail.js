import { TRAIL_RACE } from '../../../api/types';
import { runningRaceDistanceOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiHelpers';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function trail({ races, events }) {
  return (
    <RaceEventsPage
      races={races}
      events={events}
      distanceOptions={runningRaceDistanceOptions}
      title="Upcoming Trail Runs"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([TRAIL_RACE]);

  return {
    props: {
      races: races,
      events: [TRAIL_RACE],
    },
    revalidate: 60,
  };
};

export default trail;
