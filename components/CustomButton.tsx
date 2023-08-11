'use client';

import React from 'react';
import Image from 'next/image';

interface CustomButtonProps {
  title: string,
  containerStyle: string,
  onClickFunction: () => void,
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, containerStyle ,onClickFunction}) => {
  return (
    <button
      className={containerStyle}
      onClick={() => onClickFunction}
    >
      <span className='flex-1 m-3'>
        {title}
      </span>
    </button>
  )
}

export default CustomButton