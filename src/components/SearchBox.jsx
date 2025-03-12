import React from 'react';
import { AppContext } from ''

export default function SearchBox() {

    const [searchInput, setSearchInput] = React.useState('');
    const { setFilteredCountries, allCountries } = React.useContext(AppContext);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        
        if (value === '') {
            setFilteredCountries(allCountries);
        }
        else {
            const filtered = allCountries.filter(country => 
            country.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCountries(filtered);
        }
    };

    return (
        <div className='search-box'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input 
            type="text"
            placeholder='Search for a country...'
            value={searchInput}
            onChange={handleSearchChange}
            />
        </div>
    )
}