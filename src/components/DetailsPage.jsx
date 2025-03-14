import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function CountryDetail({ country, onBack }) {
    const { allCountries } = useContext(AppContext)

    // Function to get full country names from border alpha3Codes
    const getBorderCountryNames = (borders) => {
        return borders
        ?.map((borderCode) => allCountries.find((c) => c.alpha3Code === borderCode)?.name)
        .filter(Boolean) // Remove undefined values
    }

    const borderCountryNames = getBorderCountryNames(country?.borders);

    return (
        <div className="country-detail">
            <button className="back-button" onClick={onBack}>
                ← Back
            </button>

            <div className="detail-content">
                <div className='detail_flag'>
                    <div className="flag-container">
                        <img
                            src={country?.flags?.png}
                            alt={`${country?.name} flag`}
                            className="detail-flag"
                        />
                    </div>

                    <div className="detail-info">
                        <h2>{country?.name}</h2>

                        <div className="info-columns">
                            <div className="info-column">
                                <p>Native Name: <span>{country?.nativeName || 'N/A'}</span></p>
                                <p>Population: <span>{country?.population?.toLocaleString() || 'N/A'}</span></p>
                                <p>Region: <span>{country?.region || 'N/A'}</span></p>
                                <p>Sub Region: <span>{country?.subregion || 'N/A'}</span></p>
                                <p>Capital: <span>{country?.capital || 'N/A'}</span></p>
                            </div>

                            <div className="info-column">
                                <p>Top Level Domain: <span>{country?.topLevelDomain?.join(', ') || 'N/A'}</span></p>
                                <p>Currencies: <span>{country?.currencies?.map((currency) => currency.name).join(', ') || 'N/A'}</span></p>
                                <p>Languages: <span>{country?.languages?.map((language) => language.name).join(', ') || 'N/A'}</span></p>
                            </div>
                        </div>

                        {borderCountryNames.length > 0 && (
                            <div className="border-countries">
                                <p><strong>Border Countries:</strong></p>
                                <div className="border-buttons">
                                    {borderCountryNames.map((borderName) => (
                                        <button key={borderName} className="border-button">{borderName}</button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
