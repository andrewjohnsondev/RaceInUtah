import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useRef } from 'react';

const calendar = () => {
  const calendarRef = useRef(null);
  return (
    <FullCalendar
      innerRef={calendarRef}
      plugins={[dayGridPlugin]}
      editable
      selectable
      events={[
        { title: 'event 1', date: '2022-05-01', classNames: ['bg-red-400'] },
        { title: 'event 2', date: '2022-05-02' },
      ]}
    />
  );
};

export async function getStaticPaths() {

	const generateParams = paths.map((path) => {
	  const id = String(path);
	  return { params: { race_id: id } };
	});
	return {
	  paths: generateParams,
	  fallback: 'blocking', // false or 'blocking'
	};
  }
  
  export const getStaticProps = async () => {
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
	
	const race = { ...data.race, url: affiliateURL };
	return {
	  props: {
		race: race,
	  },
	  revalidate: 60,
	};
  };
  
  export default Race;
  

export default calendar;
