import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {

    function formatNumberWithCommas(number) {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch('/data.json');
            const data = await response.json();
            setCountries(data);
        };

        fetchCountries();
    }, []);

    return (
        <div className="card">
            {countries.map(country => (
                <Link to={`/country/${country.id}`} key={country.id} className="country-card">
                    <img src={props.flags.png} alt={`${props.name} flag`}></img>
                    <div className="card-info">
                        <h2>{props.name}</h2>
                        <p>Population: <span>{formatNumberWithCommas(props.population)}</span></p>
                        <p>Region: <span>{props.region}</span></p>
                        <p>Capital: <span>{props.capital}</span></p>
                    </div>
                </Link>
            ))}
        </div>
    )
}