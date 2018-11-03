import React from 'react'

// Stock # 29839 - 107.613 KM - Petrol - Red
// stockNumber mileage fuelType color
const AvailableCarsArea = () => (
  <div className='available-cars-container'>
    <div className='available-cars__top--text'>
      <p className='available-cars__text available-cars__text--bold'>Available Cars</p>
      <p className='available-cars__text available-cars__width--fourty available-cars__text--medium'>Sort by</p>
    </div>
    <div className='available-cars__top--text available-cars__text--margin'>
      <p className='available-cars__text available-cars__text--regular'>Showing 10 of 100 results</p>
      <p className='available-cars__text available-cars__dropdown'>None</p>
    </div>

    <div className='available-car'>
      <div className='available-car__img--container' />
      <div className='available-car__details--container'>
        <div className='available-car__details'>
          <p className='available-cars__text available-cars__text--bold'>Chrysler Crossfire</p>
          <div className='available-cars__text available-cars__text--small available-cars__width--max'>
            <p>Stock # 29839 - 107.613 KM - Petrol - Red</p>
          </div>
          <a
            href='#view details'
            className='available-cars__text available-cars__text--small available-cars__link'>View details</a>
        </div>
      </div>
    </div>
  </div>
)

export default AvailableCarsArea
