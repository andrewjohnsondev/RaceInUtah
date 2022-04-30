import { DUATHLON } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function duathlon({ races, events }) {
  return (
    <RaceEventsPage
      includeFilter="false"
      races={races}
      events={events}
      title="Duathlon Race"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([DUATHLON]);

  return {
    props: {
      races: races,
      events: [DUATHLON],
    },
    revalidate: 60,
  };
};
export default duathlon;
