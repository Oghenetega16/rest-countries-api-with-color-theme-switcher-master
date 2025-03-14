import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [allCountries, setAllCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                setAllCountries(data);
                setFilteredCountries(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <AppContext.Provider value={{ allCountries, filteredCountries, setFilteredCountries }}>
            {children}
        </AppContext.Provider>
    );
};
