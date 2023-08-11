import React from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'

const Catalog = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className="home__text-container">
        <h1 className="text-4x1 font-extrabold">Car Catalogue</h1>
        <p>Explore your world with our cars</p>
      </div>
      <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
      </div>
    </div>
  )
}

export default Catalog