import SectionTitle from '../../../components/SectionTitle';
import MapWrapper from '../../../components/googleMaps/MapWrapper';
import RaceEventsList from '../../../components/racePage/RaceEventsList';
import RaceMeta from '../../../components/racePage/RaceMeta';
import Cta from '../../../components/Cta';
import BackButton from '../../../components/BackButton';
import RaceDescription from '../../../components/racePage/RaceDescription';
import { fetchRacePaths, fetchById } from '../../../api/apiMethods';
import {
  RUNNING_RACE,
  VIRTUAL_RACE,
  TRAIL_RACE,
  MOUNTAIN_BIKE_RACE,
  ROAD_BIKE_RACE,
  BIKE_TOURS,
  GRAVEL_BIKE_RACE,
  TRIATHLON,
  DUATHLON,
  WHEELCHAIR,
} from '../../../api/types';

function Race({ race }) {
  const location = `${race.address.street} ${race.address.city}, ${race.address.state}, ${race.address.zipcode}`;
  const data = race.description;

  return (
    <article className="relative">
      <BackButton />
      <header className="bg-pattern wrapper mx-auto flex justify-center py-24 text-center">
        <SectionTitle title={race.name} />
      </header>
      <section className="relative border border-b-8 border-transparent border-b-primary bg-blueGrey-900">
        <div className="wrapper grid md:grid-cols-2">
          <div className="flex flex-col items-center space-y-8 py-16 text-center md:items-start md:py-20 md:text-left">
            <RaceMeta
              title="Date"
              meta={race.next_date}
              icon="/assets/calendar-icon.svg"
            />
            <RaceMeta
              title="Location"
              meta={location}
              icon="/assets/location-icon.svg"
            />
          </div>
          <div className="absolute right-0 top-0 z-50 hidden h-full grid-cols-1  md:grid md:w-6/12 ">
            <MapWrapper className="h-full w-full" location={location} />
          </div>
        </div>
      </section>
      <section className="bg-pattern bg-blueGrey-200 py-20 md:py-24">
        <div className="wrapper space-y-16 text-center">
          <h2 className="text-3xl font-bold">Events</h2>
          <RaceEventsList race={race} />
        </div>
      </section>
      <Cta url={race.url} text="Sign up!" />
      <section className="wrapper bg-pattern space-y-14 py-20 md:py-24">
        <RaceDescription data={data} race_logo={race.logo_url} />
      </section>
      <section className="grid h-[25rem] w-full grid-cols-1 bg-blueGrey-800  md:hidden">
        <MapWrapper location={location} />
      </section>
    </article>
    //
  );
}

export async function getStaticPaths() {
  const paths = await fetchRacePaths([
    RUNNING_RACE,
    VIRTUAL_RACE,
    TRAIL_RACE,
    MOUNTAIN_BIKE_RACE,
    ROAD_BIKE_RACE,
    BIKE_TOURS,
    GRAVEL_BIKE_RACE,
    TRIATHLON,
    DUATHLON,
    WHEELCHAIR,
  ]);
  const generateParams = paths.map((path) => {
    const id = String(path);
    return { params: { race_id: id } };
  });
  return {
    paths: generateParams,
    fallback: 'blocking', // false or 'blocking'
  };
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const raceId = params.race_id;
  const { data } = await fetchById(String(raceId));
  const affiliateURL = `${
    data.race.url
  }?aflt_token=${'CeeJI0St2tMa5ZXt4U8XiX3yX839NeoD'}`;
  const race = { ...data.race, url: affiliateURL };
  return {
    props: {
      race: race,
    },
    revalidate: 60,
  };
};

export default Race;
