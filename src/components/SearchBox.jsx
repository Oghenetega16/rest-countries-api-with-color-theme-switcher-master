import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function SearchBox() {
    const [searchInput, setSearchInput] = useState('');
    const { setFilteredCountries, allCountries } = useContext(AppContext);

    // Function to filter countries based on search input
    const handleSearch = () => {
        if (!searchInput.trim()) {
            setFilteredCountries(allCountries); // Show all countries if empty
        } else {
            const filtered = allCountries.filter((country) =>
                country.name.toLowerCase() === searchInput.toLowerCase() // Exact match
            );
            setFilteredCountries(filtered);
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-box">
            <i 
                className="fa-solid fa-magnifying-glass" 
                onClick={handleSearch} // Click search icon to trigger search
                style={{ cursor: 'pointer' }} 
            ></i>
            <input
                type="text"
                placeholder="Search for a country..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyPress} // Trigger search on Enter key press
            />
        </div>
    );
}
