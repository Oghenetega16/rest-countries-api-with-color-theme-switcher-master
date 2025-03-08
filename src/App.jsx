import Header from './components/Header'
import SearchBox from './components/SearchBox'
import FilterByRegion from './components/FilterByRegion'
import Card from './components/Card'
import data from './data.json'
import React from 'react'

export default function App() {

  const [isDarkMode, setIsDarkMode] = React.useState(false)
  function toggleTheme() {
    setIsDarkMode(!isDarkMode)
  }

  const infoData = data.map((info) => {
    return <Card 
    key={info.id} 
    {...info}
    />
  })

  return (
    <>
      <div className={isDarkMode ? 'body dark-mode' : 'light-mode'}>
        <Header changeTheme={toggleTheme}/>

        <SearchBox />

        <FilterByRegion />

        <div>{infoData}</div>
      </div>
      

    </>
  )
}


