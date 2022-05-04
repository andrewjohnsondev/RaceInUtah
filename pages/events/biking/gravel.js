import { GRAVEL_BIKE_RACE } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function gravel({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Gravel Bike | RaceInUtah"
        description="Upcoming Gravel Bike Races in Utah"
        keywords="Utah, Upcoming Gravel Races in Utah, Biking, Bike, Gravel, Gravel Bikes, Gravel Biking, Gravel Races, Gravel Bike Races"
      />
      <RaceEventsPage
        includeFilter="false"
        races={races}
        events={events}
        eventOptions={bikingEventOptions}
        title="Gravel Bike Races"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([GRAVEL_BIKE_RACE], false);

  return {
    props: {
      races: races,
      events: [GRAVEL_BIKE_RACE],
    },
    revalidate: 60,
  };
};
export default gravel;
