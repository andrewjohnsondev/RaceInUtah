import { useRouter } from 'next/router';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { fetchForMultipleEvents } from '../../api/apiMethods';
import { makeCalendarEvents } from '../../helpers/events';
import { allEvents } from '../../api/options';
import CalendarLegend from '../../components/CalendarLegend';

const calendar = ({ calendarObjects }) => {
  const router = useRouter();

  const localizer = momentLocalizer(moment);
  const eventStyleGetter = (event) => {
    console.log(event);
    const style = {
      backgroundColor: event.bg,
    };

    return {
      style,
    };
  };

  return (
    <div className="min-h-screen p-2">
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
