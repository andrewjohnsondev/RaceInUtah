import { MOUNTAIN_BIKE_RACE } from '../../../api/types';
import { bikingEventOptions } from '../../../api/options';
import { fetchForMultipleEvents } from '../../../api/apiMethods';
import RaceEventsPage from '../../../components/racesPage/RaceEventsPage';
import HeadComponent from '../../../components/HeadComponent';

function mountain({ races, events }) {
  return (
    <>
      <HeadComponent
        title="Mountain Bike | RaceInUtah"
        description="Upcoming Mountain Bike Races in Utah"
        keywords="Utah, Upcoming Mountain Races in Utah, Biking, Bike, Mountain, Mountain Bikes, Mountain Biking, Mountain Races, Mountain Bike Races"
      />
      <RaceEventsPage
        includeFilter="false"
        races={races}
        events={events}
        eventOptions={bikingEventOptions}
        title="Mountain Bike Races"
      />
    </>
  );
}

export const getStaticProps = async () => {
  const races = await fetchForMultipleEvents([MOUNTAIN_BIKE_RACE], false);

  return {
    props: {
      races: races,
      events: [MOUNTAIN_BIKE_RACE],
    },
    revalidate: 60,
  };
};
export default mountain;
