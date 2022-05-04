import { BIKE_TOURS } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function tour({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Bike Tours | RaceInUtah"
        description="Upcoming Bike Tours in Utah"
        keywords="Utah, Upcoming Utah Bike Tours, Biking, Bike, Tours, Bike Tours, Bike Races, Touring, Bike Touring"
      />
      <RaceEventsPage
        includeFilter="false"
        races={races}
        events={events}
        eventOptions={bikingEventOptions}
        title="Bike Tours"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([BIKE_TOURS], false);

  return {
    props: {
      races: races,
      events: [BIKE_TOURS],
    },
    revalidate: 60,
  };
};
export default tour;
