import React from 'react';

interface CustomFilterProps {
  title: string
}

const CustomFilter: React.FC<CustomFilterProps> = (title) => {
  return (
    <div>Filter</div>
  )
}

export default CustomFilter