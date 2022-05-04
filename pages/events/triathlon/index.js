import { TRIATHLON } from '../../../api/types';
import { fetchForMultipleEvents } from '../../../api/apiMethods';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function triathlon({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Triathlon | RaceInUtah"
        description="Upcoming Triathlon Races in Utah"
        keywords="Utah, Upcoming Triathlon Races in Utah, Triathlons, Triathlon, Biking, Bike, Biking Race, Swimming, Swim, Run, Running"
      />
      <RaceEventsPage
        includeFilter="false"
        races={races}
        events={events}
        title="Triathlon Race"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([TRIATHLON], false);

  return {
    props: {
      races: races,
      events: [TRIATHLON],
    },
    revalidate: 60,
  };
};
export default triathlon;
