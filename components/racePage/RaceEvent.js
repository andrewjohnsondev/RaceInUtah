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
      href={`https://runsignup.com/Race/Register/?raceId=${race.race_id}&eventId=${event.event_id}`}
      target="_blank"
      className="grid w-full grid-cols-1 grid-rows-[3rem,_1fr] justify-between rounded text-center md:grid-rows-[4rem,_1fr]"
    >
      <p className="bg-pattern-primary grid place-content-center rounded-t text-white">
        {checkEventType(event.event_type)}
      </p>
      <div className="flex flex-col justify-between gap-8 rounded-b bg-white p-8 shadow-lg shadow-blueGrey-400/20 transition-colors ">
        <h3 className="text-xl text-blueGrey-700 transition-colors  md:text-2xl">
          {event.name}
        </h3>
        <p className="rounded border border-t-2 border-transparent bg-blueGrey-100 py-6 text-2xl font-semibold text-blueGrey-900 transition-colors group-hover:border-t-white/20 group-hover:bg-blueGrey-200 md:text-3xl">
          {renderPrice()}
        </p>
      </div>
    </a>
  );
}
export default RaceEvent;
