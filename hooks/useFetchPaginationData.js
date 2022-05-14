import { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { sortEventsByDate, removeEventDuplicates } from '../helpers/array';
import { REQUEST_NUMBER } from '../api/types';
import { RaceListContext } from '../components/providers/RaceListProvider';
import { RaceEventsContext } from '../components/providers/RaceEventsProvider';
import { toast } from 'react-toastify';

const useFetchPaginationData = (raceListLength) => {
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [raceList, setRaceList] = useContext(RaceListContext);

  const [pageNumber, setPageNumber] = useState(2);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setHasMore(raceListLength < +REQUEST_NUMBER ? false : true);
  }, [raceListLength]);

  const fetchData = async (event_type) => {
    try {
      const res = await axios.post('https://raceinutah.com/api/races', {
        data: {
          page: pageNumber,
          eventTypes: raceEvents,
          requestNumber: REQUEST_NUMBER,
        },
      });
      const races = res.data;
      console.log(races);
      if (races.length < +REQUEST_NUMBER) setHasMore(false);
      setRaceList((prevList) =>
        sortEventsByDate(removeEventDuplicates([...prevList, ...races]))
      );
      setPageNumber((prevPage) => prevPage + 1);
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return [fetchData, hasMore];
};

export default useFetchPaginationData;
