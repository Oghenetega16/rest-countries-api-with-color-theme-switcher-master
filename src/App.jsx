import Header from './components/Header'
import SearchBox from './components/SearchBox'
import FilterByRegion from './components/FilterByRegion'
import HomePage from './components/HomePage'
import data from '../public/data.json'
import React from 'react'

export default function App() {
  const Cards = data.map((card) => {
    return <HomePage 
    key={card.id} 
    {...card}
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


