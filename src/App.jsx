import Header from './components/Header'
import SearchBox from './components/SearchBox'
import FilterByRegion from './components/FilterByRegion'
import Card from './components/Card'
import data from '../public/data.json'
import React from 'react'

export default function App() {
  const Cards = data.map((info) => {
    return <Card 
    key={info.id} 
    {...info}
    />
  })

  return (
    <>
      <div>
        <Header />

        <div className='search_region'>
          <SearchBox />
          <FilterByRegion />
        </div>

        <div className='cards'>{Cards}</div>
      </div>
      

    </>
  )
}


