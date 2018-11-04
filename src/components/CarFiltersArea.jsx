import React from 'react'

import Dropdown from './Dropdown'
import Button from './Button'

const CarFiltersArea = (props) => {
  return (
    <div className='filters-container'>
      <div className='filters-container__content'>
        <p className='filter__text--small'>Color</p>
        <div className='filter__dropdown'>
          <Dropdown dropdownContent={props.colors} />
        </div>
        <p className='filter__text--small'>Manufacturer</p>
        <div className='filter__dropdown'>
          <Dropdown dropdownContent={props.manufacturers} />
        </div>
        <div className='filter__btn--container'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default CarFiltersArea
