import { WHEELCHAIR } from '../../../api/types';
import { fetchForMultipleEvents } from '../../../api/apiMethods';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function wheelchair({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Wheelchair Races | RaceInUtah"
        description="Upcoming Wheelchair Races in Utah"
        keywords="Utah, Upcoming Wheelchair Races in Utah, Wheelchairs, Wheelchair Races, Wheels"
      />
      <RaceEventsPage
        includeFilter="false"
        races={races}
        events={events}
        title="Wheelchair Race"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([WHEELCHAIR], false);

  return {
    props: {
      races: races,
      events: [WHEELCHAIR],
    },
    revalidate: 60,
  };
};
export default wheelchair;
