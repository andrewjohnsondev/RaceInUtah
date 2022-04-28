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

export default calendar;
