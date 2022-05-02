const options = [
  { title: 'Runs', bg: 'bg-calendar-runs' },
  { title: 'Trail Runs', bg: 'bg-calendar-trail' },
  { title: 'Virtual Runs', bg: 'bg-calendar-virtual' },
  { title: 'Road Bike', bg: 'bg-calendar-roadBike' },
  { title: 'Mountain Bike', bg: 'bg-calendar-mountainBike' },
  { title: 'Gravel Bike', bg: 'bg-calendar-gravelBike' },
  { title: 'Bike Tours', bg: 'bg-calendar-bikeTours' },
  { title: 'Triathlon', bg: 'bg-calendar-triathlon' },
  { title: 'Duathlon', bg: 'bg-calendar-duathlon' },
  { title: 'Wheelchair', bg: 'bg-calendar-wheelchair' },
];

function CalendarLegend() {
  const renderLegends = () => {
    return options.map((race) => {
      return (
        <li
          key={race.title}
          className="flex min-w-[8rem] items-center gap-2 text-sm"
        >
          <div className={`h-3 w-3 ${race.bg}`}></div>
          {race.title}
        </li>
      );
    });
  };
  return (
    <ul className="wrapper mt-12 mb-6 hidden flex-wrap items-center gap-6 md:flex">
      {renderLegends()}
    </ul>
  );
}
export default CalendarLegend;
