import Section from '../../../components/Section';
import SectionTitle from '../../../components/SectionTitle';
import RaceList from '../../../components/racesPage/RaceList';
import { VIRTUAL_RACE } from '../../../api/types';
import { runningRaceDistanceOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import Search from '../../../components/Search';
import Filter from '../../../components/Filter';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function trail({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Virtual Runs | RaceInUtah"
        description="Upcoming Virtual Runs in Utah"
        keywords="Utah, Upcoming Utah Virtual Runs, Virtual, Virtual Runs, Virtual Races, Ultra, Marathon, Half Marathon, Races, Running, 10k, 5k"
      />
      <RaceEventsPage
        races={races}
        events={events}
        distanceOptions={runningRaceDistanceOptions}
        title="Upcoming Virtual Runs"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([VIRTUAL_RACE], false);

  return {
    props: {
      races: races,
      events: [VIRTUAL_RACE],
    },
    revalidate: 60,
  };
};

export default trail;
