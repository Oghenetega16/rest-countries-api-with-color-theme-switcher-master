import React from 'react'

export default function FilterByRegion() {

    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedRegion, setSelectedRegion] = React.useState('Filter By Region')
    
    function toggleDropDown() {
        setIsOpen(!isOpen)
    }

    function handleRegionSelect(region) {
        setSelectedRegion(region)
        setIsOpen(false)
    }

    const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

    return (
        <>
            <div className='select-region'>
                <div className='filter' onClick={toggleDropDown}>
                    <p>{selectedRegion}</p>
                    <i className={isOpen ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"}></i> 
                </div>
                {isOpen && (
                    <div className='regions'>
                        <ul>
                            {regions.map((region) => (
                                <li key={region} onClick={() => handleRegionSelect(region)}>
                                    {region}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}