import { useState, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import useTermFetch from '../hooks/useTermFetch';
import { IsSearchingContext } from './providers/IsSearchingProvider';
import { RaceListContext } from './providers/RaceListProvider';
import { RaceEventsContext } from './providers/RaceEventsProvider';
import {
  fetchForMultipleEvents,
  fetchForMultipleEventsClientSide,
} from '../api/apiMethods';

function Search({ eventTypes }) {
  const [term, setTerm] = useState('');
  const touched = useRef(false);
  const [isSearching, setIsSearching] = useContext(IsSearchingContext);
  const [raceList, setRaceList] = useContext(RaceListContext);
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [races] = useTermFetch(term);

  useEffect(() => {
    if (!term) {
      setIsSearching(false);
    }
    if (!term && touched.current) {
      fetchForMultipleEventsClientSide({ pageNumber: 1, raceEvents }).then(
        (res) => setRaceList(res)
      );
    }

    if (term) {
      touched.current = true;
      const filteredByTerm = races.filter(({ race }) => {
        const name = race.name.toLowerCase();
        const city = race.address.city.toLowerCase();
        const searchTerm = term.toLowerCase();
        return name.startsWith(searchTerm) || city.startsWith(searchTerm);
      });
      setIsSearching(true);
      setRaceList(filteredByTerm);
    }
  }, [term, races]);
  return (
    <form
      className="flex w-full flex-col gap-2 md:col-start-1 md:row-start-1 md:max-w-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <label
        className="text-lg font-semibold text-blueGrey-800 md:text-xl"
        htmlFor="filter"
      >
        Search
      </label>
      <input
        autoComplete="off"
        id="filter"
        className="rounded border p-2 text-blueGrey-600 shadow-sm placeholder:text-blueGrey-400"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="city or event name..."
      />
    </form>
  );
}

Search.propTypes = {
  eventTypes: PropTypes.array,
};

export default Search;
