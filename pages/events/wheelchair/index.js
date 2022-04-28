import { WHEELCHAIR } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiHelpers';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function wheelchair({ races, events }) {
  return (
    <RaceEventsPage
      includeFilter="false"
      races={races}
      events={events}
      title="Wheelchair Race"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([WHEELCHAIR]);

  return {
    props: {
      races: races,
      events: [WHEELCHAIR],
    },
    revalidate: 60,
  };
};
export default wheelchair;
