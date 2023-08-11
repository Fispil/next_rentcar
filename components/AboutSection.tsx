'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const AboutSection = () => {
  const handleScrollToCatalog = () => {
    scrollTo(255, 255);
  }

  return (
    <div className='aboutsection'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className="aboutsection__title">
          Find, book, or rent the car of your choise -- quickly and easy.
        </h1>

        <p className="aboutsection__subtitle">
          Streamline your car rental expiriance with us without any efford from ur side
        </p>

        <CustomButton title="Learn more" containerStyle="bg-primary-blue text-white rounded-full mt-10 p-3" onClickFunction={handleScrollToCatalog} />
      </div>
      <div className='aboutsection__image-container'>
        <div className="aboutsection__image">
          <Image src='/hero.png' alt='about' fill className='object-contain' />
        </div>
        <div className="aboutsection__image-overlay">
        </div>
      </div>
    </div>
  )
}

export default AboutSection;