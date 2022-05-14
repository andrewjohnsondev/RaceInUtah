import { useContext } from 'react';
import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchPaginationData from '../hooks/useFetchPaginationData';
import { IsSearchingContext } from './providers/IsSearchingProvider';
import { RaceListContext } from './providers/RaceListProvider';

function InfiniteScrolling({ renderUI }) {
  const [isSearching, setIsSearching] = useContext(IsSearchingContext);
  const [raceList, setRaceList] = useContext(RaceListContext);
  const [fetchData, hasMore] = useFetchPaginationData(raceList.length);

  return (
    <ul>
      <InfiniteScroll
        className="flex flex-col gap-12 md:gap-16"
        loader={<h4 className="mt-4 font-bold text-primary">Loading...</h4>}
        dataLength={raceList.length}
        hasMore={isSearching ? false : hasMore}
        next={fetchData}
      >
        {renderUI()}
      </InfiniteScroll>
    </ul>
  );
}

InfiniteScrolling.propTypes = {
  renderUI: PropTypes.func,
};

export default InfiniteScrolling;
