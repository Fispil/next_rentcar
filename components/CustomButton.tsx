'use client';

import React from 'react';
import Image from 'next/image';

interface CustomButtonProps {
  title: string,
  containerStyle: string,
  onClickFunction: () => void,
  textStyles?: string,
  rightIcon?: string,
  isDisabled?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyle,
  onClickFunction,
  textStyles,
  rightIcon,
  isDisabled = false
}) => {
  return (
    !isDisabled && (
      <button
        className={`custom-btn ${containerStyle}`}
        onClick={onClickFunction}
      >
        <span className={`flex-1 m-3 ${textStyles}`}>
          {title}
        </span>
        { rightIcon &&
          <div className='relative w-6 h-6'>
            <Image src={rightIcon} alt='right-icon' fill className='object-contain' />
          </div>
        }
      </button>
    )
  )
}

export default CustomButton