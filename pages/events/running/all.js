import { RUNNING_RACE, TRAIL_RACE } from '../../../api/types';
import {
  runningRaceDistanceOptions,
  runningEventOptions,
} from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function all({ races, events }) {
  return (
    <RaceEventsPage
      races={races}
      events={events}
      eventOptions={runningEventOptions}
      distanceOptions={runningRaceDistanceOptions}
      title="All Upcoming Runs"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([RUNNING_RACE, TRAIL_RACE]);

  return {
    props: {
      races: races,
      events: [RUNNING_RACE, TRAIL_RACE],
    },
    revalidate: 60,
  };
};
export default all;
