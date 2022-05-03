import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import RaceList from './RaceList';
import SectionTitle from '../SectionTitle';
import Section from '../Section';
import Filter from '../Filter';
import Search from '../Search';

import { RaceListContext } from '../providers/RaceListProvider';
import { RaceEventsContext } from '../providers/RaceEventsProvider';

function RaceEventsPage({
  races,
  events,
  eventOptions,
  distanceOptions,
  title,
  includeFilter = 'true',
}) {
  const [raceList, setRaceList] = useContext(RaceListContext);
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  useEffect(() => {
    setRaceList(races);
    setRaceEvents(events);
  }, []);

  const renderFilter = () => {
    if (includeFilter === 'true') {
      return <Filter events={eventOptions} distances={distanceOptions} />;
    }
  };
  return (
    <Section className="bg-pattern">
      <div className="wrapper space-y-12 md:space-y-20">
        <SectionTitle title={title} />
        <div className="split">
          <Search />
          {renderFilter()}
        </div>
        <RaceList />
      </div>
    </Section>
  );
}

RaceEventsPage.propTypes = {
  races: PropTypes.array,
  events: PropTypes.array,
  eventOptions: PropTypes.array,
  distanceOptions: PropTypes.array,
  title: PropTypes.string,
};
export default RaceEventsPage;
