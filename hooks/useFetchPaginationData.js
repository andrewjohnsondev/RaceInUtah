import { useState, useContext } from 'react';

import { reduceArray } from '../helpers/array';
import { sortByDate } from '../api/apiHelpers';
import { REQUEST_NUMBER } from '../api/types';
import { fetchForMultipleEventsWithPage } from '../api/apiHelpers';
import { RaceListContext } from '../components/providers/RaceListProvider';
import { RaceEventsContext } from '../components/providers/RaceEventsProvider';

const useFetchPaginationData = () => {
  const [raceEvents, setRaceEvents] = useContext(RaceEventsContext);
  const [raceList, setRaceList] = useContext(RaceListContext);

  const [pageNumber, setPageNumber] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (event_type) => {
    const races = await fetchForMultipleEventsWithPage(raceEvents, pageNumber);
    if (races.length < REQUEST_NUMBER) setHasMore(false);
    setRaceList((prevList) => sortByDate(reduceArray([...prevList, ...races])));
    setPageNumber((prevPage) => prevPage + 1);
  };
  return [fetchData, hasMore];
};

export default useFetchPaginationData;
