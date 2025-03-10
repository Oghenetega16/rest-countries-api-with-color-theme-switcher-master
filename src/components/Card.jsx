export default function Card(props) {

    function formatNumberWithCommas(number) {
        const parts = number.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }

    return (
        <div className="card">
            <img src={props.flags.png} alt={`${props.name} flag`}></img>
            <div className="card-info">
                <h2>{props.name}</h2>
                <p>Population: <span>{formatNumberWithCommas(props.population)}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    )
}