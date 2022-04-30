import { fetchForMultipleEvents } from '../../api/apiMethods';
import { makeCalendarEvents } from '../../helpers/events';
import { allEvents } from '../../api/options';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useRouter } from 'next/router';

const calendar = ({ calendarObjects }) => {
  console.log(calendarObjects);
  const router = useRouter();

  const localizer = momentLocalizer(moment);

  return (
    <div className="min-h-[100%] p-2">
      <Calendar
        localizer={localizer}
        events={calendarObjects}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={(e) => router.push(`/events/race/${e.id}`)}
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
