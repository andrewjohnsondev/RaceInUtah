import Link from 'next/link';
import React, { useContext } from 'react';
import { formatDates } from '../../helpers/dates';
import { renderDistances, returnEventsTypes } from '../../helpers/events';
import { RaceEventsContext } from '../providers/RaceEventsProvider';

function Race({ race }) {
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const eventTypes = returnEventsTypes(race);

  const renderEventTypes = (eventTypes) => {
    const last = eventTypes.length - 1;
    return eventTypes.map((e, index) => {
      if (index === last) return <span key={e}>{e}</span>;
      return (
        <React.Fragment key={e}>
          <span>{e}</span>
          <span>
            <img src="/assets/dot.svg" alt="" />
          </span>
        </React.Fragment>
      );
    });
  };
  return (
    <Link href={`/events/race/${race.race_id}`}>
      <a className="group cursor-pointer bg-white text-center">
        <div className="grid grid-cols-1 items-center rounded-t bg-blueGrey-200 sm:grid-cols-[2fr_1.5fr]">
          <time className="px-2 py-4 text-sm text-blueGrey-900 md:justify-self-start md:px-10 md:text-lg">
            {formatDates(race.next_date, race.next_end_date)}
          </time>
          <div className="event-shape bg-pattern-primary flex hidden h-full items-center justify-center gap-2 rounded-tr px-2 py-4 sm:block  md:pl-12">
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-white md:text-xl">
              {renderEventTypes(eventTypes)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-b bg-white py-8 px-4 transition-colors group-hover:bg-primary group-hover:text-white md:flex-row md:justify-between md:px-10 md:py-12 md:text-left">
          <div className="md:space-y-4">
            <h3 className="max-w-2xl text-xl font-bold md:text-2xl">
              {race.name}
            </h3>
            <p className="md:text-xl">{`${race.address.city}, UT`}</p>
          </div>
          <div className="flex flex-col justify-between md:space-y-4">
            <h4 className="text-base font-semibold md:text-xl">Distance:</h4>
            <p className="mt-auto md:text-xl">{renderDistances(race)}</p>
          </div>
          <div className="flex flex-col justify-between sm:hidden md:space-y-4">
            <h4 className="text-base font-semibold md:text-xl">Events:</h4>
            <p className="mt-auto flex justify-center md:text-xl">
              {renderEventTypes(eventTypes)}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
export default Race;
