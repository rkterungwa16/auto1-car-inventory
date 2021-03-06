import React from 'react'
import uniqId from 'uniqid'

import AvailableCar from './AvailableCar'
import Pagination from './Pagination'
import Dropdown from './Dropdown'

class AvailableCarsArea extends React.Component {
  renderAvailableCars (cars) {
    const renderedCars = cars.map((car) => {
      const {
        stockNumber,
        mileage,
        fuelType,
        color,
        modelName
      } = car
      return (
        <AvailableCar
          key={uniqId()}
          stockNumber={stockNumber}
          mileage={mileage}
          fuelType={fuelType}
          color={color}
          modelName={modelName}
        />
      )
    })
    return renderedCars
  }
  render () {
    const {
      cars,
      totalPageCount,
      currentPage,
      changePageNumber
    } = this.props
    return (
      <div className='available-cars-container'>
        <div className='available-cars__top--text'>
          <p className='available-cars__text available-cars__text--bold'>Available Cars</p>
          <p className='available-cars__text available-cars__width--fourty available-cars__text--medium'>Sort by</p>
        </div>
        <div className='available-cars__top--text available-cars__text--margin'>
          <p className='available-cars__text available-cars__text--regular'>{`Showing ${cars.length} of ${totalPageCount} results`}</p>
          <div className='dropdown__sort'>
            <Dropdown
              dropdownContent={['None', 'Mileage - Ascending', 'Mileage - Descending']}
              defaultDropdownTitle={{ title: 'None' }}
              getFilterParams={this.props.getSortFilterParams}
            />
          </div>
        </div>

        {this.renderAvailableCars(cars)}
        <Pagination
          getPageParams={this.props.getPageParams}
          totalPageCount={totalPageCount}
          currentPage={currentPage}
          changePageNumber={changePageNumber}
        />
      </div>
    )
  }
}

export default AvailableCarsArea
