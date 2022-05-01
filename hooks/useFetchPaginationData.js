import { useState, useContext } from 'react';

import { sortEventsByDate, removeEventDuplicates } from '../helpers/array';
import { REQUEST_NUMBER } from '../api/types';
import { fetchForMultipleEvents } from '../api/apiMethods';
import { RaceListContext } from '../components/providers/RaceListProvider';
import { RaceEventsContext } from '../components/providers/RaceEventsProvider';

const useFetchPaginationData = () => {
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [raceList, setRaceList] = useContext(RaceListContext);

  const [pageNumber, setPageNumber] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (event_type) => {
    const races = await fetchForMultipleEvents(raceEvents, false, {
      page: pageNumber,
    });
    if (races.length < REQUEST_NUMBER) setHasMore(false);
    setRaceList((prevList) =>
      sortEventsByDate(removeEventDuplicates([...prevList, ...races]))
    );
    setPageNumber((prevPage) => prevPage + 1);
  };
  return [fetchData, hasMore];
};

export default useFetchPaginationData;
