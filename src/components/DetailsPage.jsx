import React from 'react';

export default function CountryDetail({ country, onBack }) {
    function formatNumberWithCommas(number) {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    return (
        <div className="country-detail">
            <button className="back-button" onClick={onBack}>
                ← Back
            </button>
            
            <div className="detail-content">
                <div className="flag-container">
                    <img 
                        src={country.flags.png} 
                        alt={`${country.name} flag`} 
                        className="detail-flag"
                    />
                </div>
                
                <div className="detail-info">
                    <h1>{country.name}</h1>
                    
                    <div className="info-columns">
                        <div className="info-column">
                            <p><strong>Native Name:</strong> <span>{country.nativeName || 'N/A'}</span></p>
                            <p><strong>Population:</strong> <span>{formatNumberWithCommas(country.population)}</span></p>
                            <p><strong>Region:</strong> <span>{country.region}</span></p>
                            <p><strong>Sub Region:</strong> <span>{country.subregion || 'N/A'}</span></p>
                            <p><strong>Capital:</strong> <span>{country.capital || 'N/A'}</span></p>
                        </div>
                        
                        <div className="info-column">
                            <p><strong>Top Level Domain:</strong> <span>{country.topLevelDomain?.join(', ') || 'N/A'}</span></p>
                            <p><strong>Currencies:</strong> <span>
                                {country.currencies ? country.currencies.map(currency => currency.name).join(', ') : 'N/A'}
                            </span></p>
                            <p><strong>Languages:</strong> <span>
                                {country.languages ? country.languages.map(language => language.name).join(', ') : 'N/A'}
                            </span></p>
                        </div>
                    </div>
                    
                    {country.borders && country.borders.length > 0 && (
                        <div className="border-countries">
                            <p><strong>Border Countries:</strong></p>
                            <div className="border-buttons">
                                {country.borders.map(border => (
                                    <button key={border} className="border-button">
                                        {border}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}





