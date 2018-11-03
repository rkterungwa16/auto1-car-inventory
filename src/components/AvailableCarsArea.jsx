import React from 'react'

import AvailableCar from './AvailableCar'
import Pagination from './Pagination'

// Stock # 29839 - 107.613 KM - Petrol - Red
// stockNumber mileage fuelType color
class AvailableCarsArea extends React.Component {
  renderAvailableCars (cars) {
    console.log('cars', cars)
    const renderedCars = cars.map((car) => {
      console.log('one car', car.stockNumber)
      const {
        stockNumber,
        mileage,
        fuelType,
        color,
        modelName
      } = car
      return (
        <AvailableCar
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
      cars
    } = this.props
    return (
      <div className='available-cars-container'>
        <div className='available-cars__top--text'>
          <p className='available-cars__text available-cars__text--bold'>Available Cars</p>
          <p className='available-cars__text available-cars__width--fourty available-cars__text--medium'>Sort by</p>
        </div>
        <div className='available-cars__top--text available-cars__text--margin'>
          <p className='available-cars__text available-cars__text--regular'>Showing 10 of 100 results</p>
          <p className='available-cars__text available-cars__dropdown'>None</p>
        </div>

        {this.renderAvailableCars(cars)}
        <Pagination />
        <footer className='footer'>
          <p className='footer__text'>© AUTO1 Group 2018</p>
        </footer>
      </div>
    )
  }
}

export default AvailableCarsArea
