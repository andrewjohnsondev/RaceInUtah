import { RUNNING_RACE, TRAIL_RACE } from '../../../api/types';
import {
  runningRaceDistanceOptions,
  runningEventOptions,
} from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function all({ races, events }) {
  return (
    <>
      <HeadComponent
        title="All Runs | RaceInUtah"
        description="Upcoming Runs in Utah"
        keywords="Utah, Upcoming Utah Trail Runs, Upcoming Utah Runs, Upcoming Utah Virtual Runs, Virtual, Virtual Runs, Virtual Races, Road Runs, Trail Runs, Trail Races, Ultra, Marathon, Half Marathon, Races, Running, 10k, 5k"
      />
      <RaceEventsPage
        races={races}
        events={events}
        eventOptions={runningEventOptions}
        distanceOptions={runningRaceDistanceOptions}
        title="All Upcoming Runs"
      />
    </>
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
