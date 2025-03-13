import React, { useState } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import FilterByRegion from './components/FilterByRegion';
import HomePage from './components/HomePage';
import CountryDetail from './components/DetailsPage';
import data from '../public/data.json';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredData, setFilteredData] = useState([...data]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  // Handler for selecting a country
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  // Handler to go back to main view
  const handleBack = () => {
    setSelectedCountry(null);
  };

  // Handler for search input
  const handleSearch = (term) => {
    setSearchTerm(term);
    filterCountries(term, selectedRegion);
  };

  // Handler for region filter
  const handleRegionFilter = (region) => {
    setSelectedRegion(region);
    filterCountries(searchTerm, region);
  };

  // Function to filter countries based on search and region
  const filterCountries = (term, region) => {
    let filtered = [...data];

    if (term) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (region) {
      filtered = filtered.filter((country) => country.region === region);
    }

    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      {selectedCountry ? (
        <CountryDetail country={selectedCountry} onBack={handleBack} />
      ) : (
        <>
          <div className="search_region">
            <SearchBox onSearch={handleSearch} />
            <FilterByRegion onRegionSelect={handleRegionFilter} />
          </div>
          <div className="cards">
            {filteredData.map((country) => (
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
