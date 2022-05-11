import { useRouter } from 'next/router';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { fetchForMultipleEvents } from '../../api/apiMethods';
import { makeCalendarEvents } from '../../helpers/events';
import { allEvents } from '../../api/options';
import CalendarLegend from '../../components/CalendarLegend';
import HeadComponent from '../../components/HeadComponent';
import { useEffect, useState } from 'react';

const calendar = ({ calendarObjects }) => {
  const [calendarView, setCalendarView] = useState('month');
  const router = useRouter();

  const localizer = momentLocalizer(moment);
  const eventStyleGetter = (event) => {
    const style = {
      backgroundColor: event.bg,
    };

    return {
      style,
    };
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 700) {
      setCalendarView('agenda');
    }
  }, []);

  const renderView = () => {
    if (screenWidth === 0 || screenWidth > 700) {
      return 'month';
    }

    return 'agenda';
  };

  return (
    <div className="min-h-screen px-2 py-6 md:py-4">
      <HeadComponent
        title="Calendar | RaceInUtah"
        description="Upcoming Race in Utah"
        keywords="Utah, Upcoming Gravel Races in Utah, Biking, Bike, Gravel, Gravel Bikes, Gravel Biking, Gravel Races, Gravel Bike Races Upcoming Mountain Races in Utah, Mountain, Mountain Bikes, Mountain Biking, Mountain Races, Mountain Bike Races, Upcoming Road Bike Races in Utah, Road, Road Bikes, Road Biking, Road Races, Upcoming Utah Bike Tours, Tours, Bike Tours, Bike Races, Touring, Bike Touring"
      />
      <CalendarLegend />
      <Calendar
        className="min-h-screen"
        localizer={localizer}
        events={calendarObjects}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(e) => router.push(`/events/race/${e.id}`)}
        eventPropGetter={eventStyleGetter}
      />
      <CalendarLegend isMobileView={true} />
    </div>
  );
};

export const getStaticProps = async () => {
  const getEventData = () => {
    const data = allEvents.map(async (e) => {
      const races = await fetchForMultipleEvents([e.param], true);
      return {
        type: e.type,
        data: races,
      };
    });

    return Promise.all(data);
  };

  const getRaceEvents = await getEventData();
  const calendarObjects = await makeCalendarEvents(getRaceEvents);

  return {
    props: {
      calendarObjects,
    },
    revalidate: 60,
  };
};

export default calendar;
