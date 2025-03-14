export default function Card({ country, onSelectCountry }) {
    const formatNumberWithCommas = (number) => number?.toLocaleString() || 'N/A';

    return (
        <div className="card" onClick={() => onSelectCountry(country)}>
            <div className="card-flag"><img src={country?.flags?.png} alt={`${country?.name} flag`} /></div>
            <div className="card-info">
                <h2>{country?.name}</h2>
                <p>Population: <span>{formatNumberWithCommas(country?.population)}</span></p>
                <p>Region: <span>{country?.region}</span></p>
                <p>Capital: <span>{country?.capital}</span></p>
            </div>
        </div>
    );
}
