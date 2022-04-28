import React, { useState } from 'react';

export const RaceEventsContext = React.createContext();

function RaceEventsProvider({ children }) {
  const [raceEvents, setRaceEvents] = useState([]);

  return (
    <RaceEventsContext.Provider value={[raceEvents, setRaceEvents]}>
      {children}
    </RaceEventsContext.Provider>
  );
}
export default RaceEventsProvider;
