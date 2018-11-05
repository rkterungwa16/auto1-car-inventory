import React from 'react'

import Dropdown from './Dropdown'
import Button from './Button'

const CarFiltersArea = (props) => {
  const {
    colors,
    manufacturers,
    getColorsFilterParams,
    getManufacturersFilterParams,
    getFilteredCarList
  } = props
  return (
    <div className='filters-container'>
      <div className='filters-container__content'>
        <p className='filter__text--small'>Color</p>
        <div className='filter__dropdown'>
          <Dropdown
            dropdownContent={colors}
            defaultDropdownTitle={{ title: 'All car colors' }}
            getFilterParams={getColorsFilterParams}
          />
        </div>
        <p className='filter__text--small'>Manufacturer</p>
        <div className='filter__dropdown'>
          <Dropdown
            dropdownContent={manufacturers}
            defaultDropdownTitle={{ title: 'All manufacturers' }}
            getFilterParams={getManufacturersFilterParams}
          />
        </div>
        <div
          className='filter__btn--container'
        >
          <Button handleClick={getFilteredCarList} text='Filter' />
        </div>
      </div>
    </div>
  )
}

export default CarFiltersArea
