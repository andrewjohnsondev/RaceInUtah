import React, { useState } from 'react';

export const IsSearchingContext = React.createContext();

function IsSearchingProvider({ children }) {
  const [isSearching, setIsSearching] = useState(false);
  const values = [isSearching, setIsSearching];
  return (
    <IsSearchingContext.Provider value={values}>
      {children}
    </IsSearchingContext.Provider>
  );
}
export default IsSearchingProvider;
