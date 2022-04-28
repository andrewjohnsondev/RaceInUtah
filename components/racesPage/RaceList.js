import { useContext } from 'react';

import Race from './Race';
import InfiniteScrolling from '../InfiniteScrolling';
import { RaceListContext } from '../providers/RaceListProvider';

function RaceList() {
  const [raceList, setRaceList] = useContext(RaceListContext);

  const renderRaces = () =>
    raceList.map(({ race }) => {
      return (
        <li className="rounded drop-shadow-lg" key={race.name}>
          <Race race={race} />
        </li>
      );
    });

  if (raceList.length === 0) {
    return <p className="text-center text-2xl">No results found...</p>;
  }
  return <InfiniteScrolling renderUI={renderRaces} />;
}
export default RaceList;
