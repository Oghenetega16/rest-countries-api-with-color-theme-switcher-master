export default function Card(props) {
    return (
        <div className="card">
            <img src={props.flags.png}></img>
            <div className="card-info">
                <h2>{props.name}</h2>
                <p>Population: <span>{props.population}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    )
}