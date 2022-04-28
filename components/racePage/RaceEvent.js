import { compareDates } from '../../helpers/dates';
import { checkEventType } from '../../helpers/events';

function RaceEvent({ event }) {
  const renderPrice = () => {
    if (event.registration_periods.length === 1) {
      return event.registration_periods[0].race_fee;
    }
    let price;
    event.registration_periods.forEach((e, index) => {
      if (price) return;
      if (compareDates(e.registration_closes) === 1) {
        price = e.race_fee;
        return;
      }
    });

    return price;
  };

  return (
    <a href="#" className="h-full rounded text-center">
      <p className="bg-pattern-primary rounded-t py-3 text-white">
        {checkEventType(event.event_type)}
      </p>
      <div className="flex h-[80%] flex-col justify-between gap-8 rounded-b bg-white p-8 shadow-md transition-colors group-hover:bg-primary group-hover:text-white">
        <h3 className="text-xl font-semibold ">{event.name}</h3>
        <p className="text-xl text-blueGrey-700 group-hover:text-white">
          {renderPrice()}
        </p>
      </div>
    </a>
  );
}
export default RaceEvent;
