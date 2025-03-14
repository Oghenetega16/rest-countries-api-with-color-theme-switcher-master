import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function FilterByRegion() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('Filter By Region');
    const { setFilteredCountries, allCountries } = useContext(AppContext);

    const toggleDropDown = () => setIsOpen(!isOpen);

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setIsOpen(false);

        if (region === 'All') {
            setFilteredCountries(allCountries); // Show all countries
        } else {
            const filtered = allCountries.filter(
                (country) => country.region.toLowerCase() === region.toLowerCase()
            );
            setFilteredCountries(filtered);
        }
    };

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    return (
        <div className="select-region">
            <div className="filter" onClick={toggleDropDown}>
                <p>{selectedRegion}</p>
                <i className={isOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}></i>
            </div>
            {isOpen && (
                <ul className="regions">
                    {regions.map((region) => (
                        <li key={region} onClick={() => handleRegionSelect(region)}>
                            {region}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
