export default function Card(country, onSelectCountry) {

    function formatNumberWithCommas(number) {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    return (
        <div className="card" onClick={() => onSelectCountry(country)}>
            <img src={country.flags.png} alt={`${country.name} flag`}></img>
            <div className="card-info">
                <h2>{country.name}</h2>
                <p>Population: <span>{formatNumberWithCommas(country.population)}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
            </div>
        </div>
    )
}