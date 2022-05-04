import { TRAIL_RACE } from '../../../api/types';
import { runningRaceDistanceOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function trail({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Trail Runs | RaceInUtah"
        description="Upcoming Trail Runs in Utah"
        keywords="Utah, Upcoming Utah Trail Runs, Trail, Trail Runs, Trail Races, Ultra, Marathon, Half Marathon, Races, Running, 10k, 5k"
      />
      <RaceEventsPage
        races={races}
        events={events}
        distanceOptions={runningRaceDistanceOptions}
        title="Upcoming Trail Runs"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([TRAIL_RACE], false);

  return {
    props: {
      races: races,
      events: [TRAIL_RACE],
    },
    revalidate: 60,
  };
};

export default trail;
