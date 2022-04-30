import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { reduceArray } from '../helpers/array';
import { RaceEventsContext } from '../components/providers/RaceEventsProvider';

import api from '../api';
import { fetchByCity, fetchByEventName } from '../api/apiMethods';

const useTermFetch = (term) => {
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [races, setRaces] = useState([]);

  const debounced = useDebouncedCallback(
    (value) => {
      Promise.all([
        ...raceEvents.map((raceEvent) => fetchByCity(term, raceEvent)),
        ...raceEvents.map((raceEvent) => fetchByEventName(term, raceEvent)),
      ]).then((res) => {
        let results = new Set();
        res.forEach((result) =>
          result.data.races.forEach((race) => results.add(race))
        );

        setRaces(reduceArray([...results]));
      });
    },
    500,
    { leading: true }
  );

  useEffect(() => {
    return () => {
      debounced(term);
    };
  }, [term]);

  return [races];
};

useTermFetch.propsTypes = {
  term: PropTypes.string,
};

export default useTermFetch;
