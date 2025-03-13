import React, { createContext, useState, useEffect } from 'react';
import data from '../../public/data.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  
  useEffect(() => {
    setAllCountries(data);
    setFilteredCountries(data);
  }, []);

  return (
    <AppContext.Provider value={{ allCountries, filteredCountries, setFilteredCountries }}>
      {children}
    </AppContext.Provider>
  );
};
