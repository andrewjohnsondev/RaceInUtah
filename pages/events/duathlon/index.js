import { DUATHLON } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function duathlon({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Duathlon | RaceInUtah"
        description="Upcoming Duathlon Races in Utah"
        keywords="Utah, Upcoming Duathlon Races in Utah, Triathlons, Running, Run, Biking, Bike, Bike Races, Duathlon"
      />
      <RaceEventsPage
        includeFilter="false"
        races={races}
        events={events}
        title="Duathlon Race"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([DUATHLON], false);

  return {
    props: {
      races: races,
      events: [DUATHLON],
    },
    revalidate: 60,
  };
};
export default duathlon;
