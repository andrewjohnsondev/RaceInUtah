import RaceEvent from './RaceEvent';

function RaceEventsList({ race }) {
  const renderEvents = () =>
    race.events.map((e) => (
      <li className="group flex w-full" key={e.event_id}>
        <RaceEvent race={race} event={e} />
      </li>
    ));
  return (
    <ul className="grid auto-rows-[1fr] grid-cols-[repeat(auto-fit,_minmax(2rem,_18rem))] justify-center gap-16  md:gap-12">
      {renderEvents()}
    </ul>
  );
}
export default RaceEventsList;
