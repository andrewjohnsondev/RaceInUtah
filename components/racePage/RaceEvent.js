import { compareDates } from '../../helpers/dates';
import { checkEventType } from '../../helpers/events';

function RaceEvent({ event, race }) {
  const renderPrice = () => {
    if (event.registration_periods.length === 1) {
      return event.registration_periods[0].race_fee;
    }
    let price;
    event.registration_periods.forEach((e, index) => {
      if (price) return;
      if (compareDates(e.registration_closes)) {
        price = e.race_fee;
        return;
      }
    });

    return price;
  };

  return (
    <a
      href={race.url}
      target="_blank"
      className="h-full cursor-pointer rounded text-center"
    >
      <p className="bg-pattern-primary rounded-t py-3 text-white">
        {checkEventType(event.event_type)}
      </p>
      <div className="flex h-[80%] flex-col justify-between gap-8 rounded-b bg-white p-8 shadow-lg shadow-blueGrey-400/20 transition-colors group-hover:bg-primary group-hover:text-white">
        <h3 className="text-xl text-blueGrey-700 transition-colors group-hover:text-white md:text-2xl">
          {event.name}
        </h3>
        <p className="rounded border border-t-2 border-transparent bg-blueGrey-100 py-6 text-2xl font-semibold text-blueGrey-900 transition-colors group-hover:border-t-white/20 group-hover:bg-primary group-hover:text-white md:text-3xl">
          {renderPrice()}
        </p>
      </div>
    </a>
  );
}
export default RaceEvent;
