import { TRIATHLON } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
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
  const races = await fetchForMultipleEvents([TRIATHLON]);

  return {
    props: {
      races: races,
      events: [TRIATHLON],
    },
    revalidate: 60,
  };
};
export default triathlon;
