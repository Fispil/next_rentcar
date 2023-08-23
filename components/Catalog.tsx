import React from 'react'
import SearchBar from './SearchBar'
import CustomFilter from './CustomFilter'
import { getCars } from '@/utils';
import CarCard from './CarCard';
import { CarProps, FilterProps } from '@/types';
import { fuels, yearsOfProduction } from '@/constants';
import ShowMore from './ShowMore';

interface CatalogProps {
  searchParams: FilterProps;
}

const Catalog: React.FC<CatalogProps> = async ({ searchParams }) => {
  const carsFromServer = await getCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(carsFromServer) || carsFromServer.length < 1 || !carsFromServer;

  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className="home__text-container">
        <h1 className="text-4x1 font-extrabold">Car Catalogue</h1>
        <p>Explore your world with our cars</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title='fuel' options={fuels} />
          <CustomFilter title='year' options={yearsOfProduction} />
        </div>
      </div>
      {!isDataEmpty ? (
        <section>
          <div className='home__cars-wrapper'>
            {carsFromServer?.map((car: CarProps) => (
              <CarCard car={car} key={car.model} />
            ))}
          </div>
          <ShowMore 
            page={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > carsFromServer.length}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black">
            Opps, no result found.
          </h2>
          <p>{carsFromServer?.message}</p>
        </div>)}
    </div>
  )
}

export default Catalog