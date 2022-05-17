import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { removeEventDuplicates } from '../helpers/array';
import { RaceEventsContext } from '../components/providers/RaceEventsProvider';
import axios from 'axios';
import { REQUEST_NUMBER } from '../api/types';

import { fetchByEvent } from '../api/apiMethods';
import { toast } from 'react-toastify';

const useTermFetch = (term) => {
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [races, setRaces] = useState([]);

  const debounced = useDebouncedCallback(
    (value) => {
      Promise.all([
        ...raceEvents.map((raceEvent) =>
          axios.post('https://raceinutah.com/api/races', {
            data: {
              page: 1,
              eventTypes: [raceEvent],
              requestNumber: REQUEST_NUMBER,
              options: {
                city: term,
              },
            },
          })
        ),
        ...raceEvents.map((raceEvent) => {
          return axios.post('https://raceinutah.com/api/races', {
            data: {
              page: 1,
              eventTypes: [raceEvent],
              requestNumber: REQUEST_NUMBER,
              options: {
                name: term,
              },
            },
          });
        }),
      ])
        .then((res) => {
          const races = res.filter((race) => race.data.length >= 1);

          let results = new Set();

          races.forEach(({ data }) =>
            data.forEach((race) => results.add(race))
          );

          setRaces(removeEventDuplicates([...results]));
        })
        .catch((err) => {
          toast.error(err.message, {
            position: toast.POSITION.BOTTOM_LEFT,
          });
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
