import React, { useState, useContext } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import FilterByRegion from './components/FilterByRegion';
import HomePage from './components/HomePage';
import CountryDetail from './components/DetailsPage';
import { AppContext } from './context/AppContext'; // Import context

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { filteredCountries } = useContext(AppContext); // Use context

  // Handler for selecting a country
  const handleCountrySelect = (country) => {
    setSelectedCountry(null); // Reset first to ensure re-render
    setTimeout(() => setSelectedCountry(country), 0); // Set new country after reset
  };

  // Handler to go back to main view
  const handleBack = () => {
    setSelectedCountry(null);
  };

  return (
    <div>
      <Header />
      {selectedCountry ? (
        <CountryDetail country={selectedCountry} onBack={handleBack} />
      ) : (
        <>
          <div className="search_region">
            <SearchBox />
            <FilterByRegion />
          </div>
          <div className="cards">
            {filteredCountries.map((country) => (
              <HomePage
                key={country.alpha3Code || country.id}
                country={country}
                onSelectCountry={() => handleCountrySelect(country)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
