import React, { useState } from 'react';

export const RaceListContext = React.createContext([]);

function RaceListProvider({ children }) {
  const [raceList, setRaceList] = useState([]);

  return (
    <RaceListContext.Provider value={[raceList, setRaceList]}>
      {children}
    </RaceListContext.Provider>
  );
}
export default RaceListProvider;
