'use client'

import React, { useState } from 'react'
import AutoCompleteSearch from './AutoCompleteSearch'
import SearchManufacturer from "./AutoCompleteSearch";

const SearchBar = () => {
  const [carModel, setCarModel] = useState('');
  const [manufacturer, setManuFacturer] = useState('');

  const handleFormSubmit = () => {

  }

  return (
    <form className='searchbar' onSubmit={handleFormSubmit}>
      <div className="searchbar__item">
        <AutoCompleteSearch
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar