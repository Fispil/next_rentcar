'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import AutoCompleteSearch from './AutoCompleteSearch'
import Image from 'next/image'


interface CustomSearchButtonProps {
  styles: string
}

const CustomSearchButton: React.FC<CustomSearchButtonProps> = ({ styles }) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${styles}`}>
      <Image 
        src="/magnifying-glass.svg"
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

const SearchBar = () => {
  const [carModel, setCarModel] = useState('');
  const [manufacturer, setManuFacturer] = useState('');
  const router = useRouter();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(manufacturer === '' && carModel === '') {
      return alert('Please fill in the parameters')
    }

    updateSearchParams(carModel.toLocaleLowerCase(), manufacturer.toLocaleLowerCase())
  }

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName);
  }

  return (
    <form className='searchbar' onSubmit={handleFormSubmit}>
      <div className="searchbar__item">
        <AutoCompleteSearch
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />

        <CustomSearchButton styles={'sm:hidden'}/>
      </div>
      <div className='searchbar__item'>
        <Image 
          src="/model-icon.png"
          alt="modelicon"
          width={25}
          height={25}
          className="absolute w-[20px] h=[20px] m1-4"
        />
        <input 
          type="text"
          name="model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          placeholder='Tiguan'
          className='searchbar__input'
        />
        <CustomSearchButton styles={'sm:hidden'}/>
      </div>
      <CustomSearchButton styles={'max-sm:hidden'}/>
    </form>
  )
}

export default SearchBar