import React, { useState } from 'react';

export default function FilterByRegion({ onRegionSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('Filter By Region');

  const toggleDropDown = () => setIsOpen(!isOpen);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
    onRegionSelect(region);
  };

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="select-region">
      <div className="filter" onClick={toggleDropDown}>
        <p>{selectedRegion}</p>
        <i
          className={isOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'}
        ></i>
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
