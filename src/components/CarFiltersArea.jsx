import React from 'react'

import Dropdown from './Dropdown'
import Button from './Button'

class CarFiltersArea extends React.Component {
  render () {
    const {
      colors,
      manufacturers
    } = this.props
    return (
      <div className='filters-container'>
        <div className='filters-container__content'>
          <p className='filter__text--small'>Color</p>
          <div className='filter__dropdown'>
            <Dropdown
              dropdownContent={colors}
              defaultDropdownTitle={{ title: 'All car colors' }}
              getFilterParams={this.props.getColorsFilterParams}
            />
          </div>
          <p className='filter__text--small'>Manufacturer</p>
          <div className='filter__dropdown'>
            <Dropdown
              dropdownContent={manufacturers}
              getFilterParams={this.props.getManufacturersFilterParams}
            />
          </div>
          <div
            className='filter__btn--container'
          >
            <Button handleClick={this.props.getFilteredCarList} />
          </div>
        </div>
      </div>
    )
  }
}

export default CarFiltersArea
