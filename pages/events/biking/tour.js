import { BIKE_TOURS } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiHelpers';

import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';

function tour({ races, events }) {
  return (
    <RaceEventsPage
      includeFilter="false"
      races={races}
      events={events}
      eventOptions={bikingEventOptions}
      title="Bike Tours"
    />
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([BIKE_TOURS]);

  return {
    props: {
      races: races,
      events: [BIKE_TOURS],
    },
    revalidate: 60,
  };
};
export default tour;
