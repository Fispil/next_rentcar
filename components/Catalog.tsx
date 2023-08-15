import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'
import { getCars } from '@/utils';
import CarCard from './CarCard';
import { CarProps } from '@/types';

const Catalog = () => {
  const [allCars, setAllCars] = useState<CarProps[]>([]);

  const getAllCarsFromServer = async () => {
    const carsFromServer = await getCars();
    setAllCars(carsFromServer);
  }

  useEffect(() => {
    getAllCarsFromServer()
  }, [])

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
      <div className='home__cars-wrapper'>
        {allCars?.map(car => (
          <CarCard car={car} key={car.model} />
        ))}
      </div>
    </div>
  )
}

export default Catalog