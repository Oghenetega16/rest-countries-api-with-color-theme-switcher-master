import Header from './components/Header'
import Card from './components/Card'
import data from './data.json'

export default function App() {
  const infoData = data.map((info) => {
    return <Card 
    key={info.id} 
    {...info}
    />
  })

  return (
    <>
      <Header />

      <div className='search-box'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search for a country...'></input>
      </div>

      <div className='select-region'>
        <div className='filter'>
          <p>Filter by Region</p>
          <i class="fa-solid fa-angle-down"></i> 
        </div>
        <div className='regions'>
          <ul>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>

      <div>{infoData}</div>

    </>
  )
}


