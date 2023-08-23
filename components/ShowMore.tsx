"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

interface ShowMoreProps {
  page: number,
  isNext: boolean
}


const ShowMore: React.FC<ShowMoreProps> = ({ page, isNext }) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (page + 1) * 10;
    const newPathName = updateSearchParams("limit", newLimit.toString());

    router.push(newPathName);
  }

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          containerStyle='bg-primary-blue rounded-full text-white'
          onClickFunction={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore