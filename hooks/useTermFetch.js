import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { removeEventDuplicates } from '../helpers/array';
import { RaceEventsContext } from '../components/providers/RaceEventsProvider';

import { fetchByEvent } from '../api/apiMethods';

const useTermFetch = (term) => {
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [races, setRaces] = useState([]);

  const debounced = useDebouncedCallback(
    (value) => {
      Promise.all([
        ...raceEvents.map((raceEvent) =>
          fetchByEvent(raceEvent, false, { city: term })
        ),
        ...raceEvents.map((raceEvent) =>
          fetchByEvent(raceEvent, false, { name: term })
        ),
      ])
        .then((res) => {
          let results = new Set();
          res.forEach((result) =>
            result.data.races.forEach((race) => results.add(race))
          );

          setRaces(removeEventDuplicates([...results]));
        })
        .catch((err) => {
          setError(true);
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
