import { TRIATHLON } from '../../../api/types';
import { fetchForMultipleEvents } from '../../../api/apiMethods';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function triathlon({ races, events }) {
  return (
    <RaceEventsPage
      includeFilter="false"
      races={races}
      events={events}
      title="Triathlon Race"
    />
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
