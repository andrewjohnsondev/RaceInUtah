import Section from '../../../components/Section';
import SectionTitle from '../../../components/SectionTitle';
import RaceList from '../../../components/racesPage/RaceList';
import { VIRTUAL_RACE } from '../../../api/types';
import { runningRaceDistanceOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import Search from '../../../components/Search';
import Filter from '../../../components/Filter';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function trail({ races, events }) {
  return (
    <RaceEventsPage
      races={races}
      events={events}
      distanceOptions={runningRaceDistanceOptions}
      title="Upcoming Virtual Runs"
    />
  );
}

<Section className="wrapper bg-pattern space-y-12 md:space-y-20">
  <SectionTitle title="Upcoming Virtual Runs" />
  <div className="split">
    <Search />
    <Filter distances={runningRaceDistanceOptions} />
  </div>

  <RaceList type="run" />
</Section>;

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([VIRTUAL_RACE]);

  return {
    props: {
      races: races,
      events: [VIRTUAL_RACE],
    },
    revalidate: 60,
  };
};

export default trail;
