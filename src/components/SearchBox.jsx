import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function SearchBox() {
  const [searchInput, setSearchInput] = useState('');
  const { setFilteredCountries, allCountries } = useContext(AppContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (!value) {
      setFilteredCountries(allCountries);
    } else {
      setFilteredCountries(
        allCountries.filter((country) =>
          country.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="search-box" onChange={handleSearchChange}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        
      />
    </div>
  );
}
